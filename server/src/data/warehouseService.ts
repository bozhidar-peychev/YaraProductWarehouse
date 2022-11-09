import { Amount, Warehouse } from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';
import { createWarehouseHistoryAmount } from './WarehouseHistoryService';
import { getProductByProductId } from './productService';

export const getAllWarehouses = async (): Promise<Warehouse[]> => {
  const warehouses = await prismaContext.prisma.warehouse.findMany({
    select: {
      id: true,
      maxStockLevel: true,
      currentStockLevel: true,
      hazardous: true,
      products: {
        select: {
          productId: true,
          productName: true
        }
      },
      warehouseHistory: true 
    }
  });
  return warehouses;
};

const getWarehouseById = async (id): Promise<Warehouse | null> => {
  return prismaContext.prisma.warehouse.findFirst({
    where: {
      id,
    },
  });
};

export const createWarehouse = async ({maxStockLevel, hazardous, products}): Promise<Warehouse | null> => {
  const stockLevelIncrease = products?.reduce((prevProduct, product) => prevProduct + (product.amount ?? 0), 0) ?? 0
  
  if (!maxStockLevel || stockLevelIncrease > maxStockLevel) return null;
  
  const warehouse = await prismaContext.prisma.warehouse.create({
    data: { maxStockLevel, hazardous, products },
  });
  
  return warehouse;
};

export const addWarehouseProducts = async ({id, products}): Promise<Warehouse> => {

  const warehouse: any = await getWarehouseById(id)
  
  const fullProducts = (await Promise.all(products.map(async (product) => ({...(await getProductByProductId(product.productId)), amount: product.amount}) ?? product)))?.filter(product => product.hazardous === warehouse?.hazardous)

  const indvProducts = fullProducts.map((product) => {
        const amount = products?.find(p => p.productId === product.productId)?.amount
        
        if (amount) return {...product, amount}

      })

  const currentStockLevel = indvProducts?.reduce((prevProduct, currentProduct) => prevProduct + (currentProduct?.amount ?? 0), 0)
  
  if (!warehouse?.maxStockLevel || warehouse?.maxStockLevel <= currentStockLevel) return warehouse!

  const connect = fullProducts?.map(({ productId }) => ({ productId }))
  
  if (!connect) return warehouse!

  const warehousesWithConectedProducts = await Promise.all(fullProducts.map(async ({ productId }) => 
     prismaContext.prisma.warehouse.findFirst({
        select: {
          id: true,
          products: true
        },
        where: {
          products: {
            some: {
              productId
            }
          }
        }
      }).then(res => ({id: res?.id, products: res?.products}))
    )
  )
 
  const foundWarehouses = [...new Map(warehousesWithConectedProducts.filter((warehouse) => warehouse.id && warehouse.id !== id).map((m) => [m.id, m])).values()]
  
  if (foundWarehouses.length > 0) {
    await foundWarehouses.forEach(async (foundWarehouse) => {
      const individualAmounts: Amount[] = []
      await foundWarehouse?.products?.forEach(async (product) => {
        const amountArray =  await prismaContext.prisma.amount.findMany({
          where: {
            productId: product.productId,
            WarehouseHistory: {
              warehouseId: foundWarehouse.id
            }
          }
        })

        await  amountArray.forEach(el => individualAmounts.push(el))
      })
     
      await prismaContext.prisma.warehouse.update({
        where: { id: foundWarehouse.id },
        data: {
          warehouseHistory: {
            create: {
              dateExport: Math.floor(Date.now() / 1000),
            }
          }
        },
      })

      const currentWarehouseHistory =  await prismaContext.prisma.warehouseHistory.findFirst({
        orderBy: {
          dateExport: 'asc',
        },
      })

      await prismaContext.prisma.warehouse.update({
        where: { id: foundWarehouse.id },
        data: {
          currentStockLevel: {
            decrement: individualAmounts?.reduce((prevAmount, currentAmount) => prevAmount + (currentAmount?.amount ?? 0), 0)
          },
          warehouseHistory: {
            update: {
              where: { id: currentWarehouseHistory?.id },
              data: {
                amount: {
                  connect: individualAmounts.map(({id}) => ({id}))
                }
              },
            }
          }
        }
      })
    })
  }

  await prismaContext.prisma.warehouse.update({
    where: { id },
    data: {
      products: {
        connect, 
      },
      warehouseHistory: {
        create: {
          dateImport: Math.floor(Date.now() / 1000),
        }
      }
    },
  })

  const currentWarehouseHistory = await prismaContext.prisma.warehouseHistory.findFirst({
    where: {
      warehouseId: id
    },
    orderBy: {
      dateImport: 'asc',
    },
  })

  const amountIdArray: Amount[] = []
  await indvProducts?.forEach(async (ip) => {
    const amount = await createWarehouseHistoryAmount({ warehouseHistoryId: currentWarehouseHistory?.id, amount: ip?.amount, productId: ip?.productId })
    amountIdArray.push(amount!)
  })

  await prismaContext.prisma.warehouse.update({
    where: { id },
    data: {
      currentStockLevel: {
        increment: currentStockLevel
      },
      warehouseHistory: {
        update: {
          where: { id: currentWarehouseHistory?.id },
          data: {
            amount: {
              connect: amountIdArray.map(({id}) => ({id}))
            }
          },
        }
      }
    }
  })

  return (await getWarehouseById(id))!;
};