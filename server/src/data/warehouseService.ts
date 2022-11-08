import { Warehouse } from '@prisma/client';

import { Product } from './../graphql/generated/graphql';
import prismaContext from '../lib/prisma/prismaContext';
import { getProductByProductId } from './productService';

export const getAllWarehouses = async (): Promise<Warehouse[]> => {
  const warehouses = await prismaContext.prisma.warehouse.findMany();
  return warehouses;
};

export const getWarehouseById = async (id: number): Promise<Warehouse | null> => {
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

export const addWarehouseProducts = async ({id, products}: {id: number, products: Product[]}): Promise<Warehouse> => {

  const warehouse: any = await getWarehouseById(id)
  
  const fullProducts = (await Promise.all(products.map(async (product) => ({...await getProductByProductId(product.productId), amount: product.amount}) ?? product)))?.filter(product => product.hazardous === warehouse?.hazardous)

  const currentStockLevel = fullProducts.map((product) => {
        const amount = products?.find(p => p.productId === product.productId)?.amount
        
        if (amount) return {...product, amount}

      })?.reduce((prevProduct, currentProduct) => prevProduct + (currentProduct?.amount ?? 0), 0)

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
      const decrement = foundWarehouse?.products?.map((product) => {
        const amount = products?.find(p => p.productId === product.productId)?.amount
        
        if (amount) return {...product, amount}

      })?.reduce((prevProduct, currentProduct) => prevProduct + (currentProduct?.amount ?? 0), 0)
      
      await prismaContext.prisma.warehouse.update({
        where: { id: foundWarehouse.id },
        data: {
          currentStockLevel: {
            decrement
          },
          warehouseHistory: {
            create: {
              dateExport: Math.floor(Date.now() / 1000),
              amount: decrement
            }
          }
        },
      })
    })
  }

  await prismaContext.prisma.warehouse.update({
    where: { id },
    data: {
      currentStockLevel: {
        increment: currentStockLevel
      },
      products: {
        connect, 
      },
      warehouseHistory: {
        create: {
          dateImport: Math.floor(Date.now() / 1000),
          amount: currentStockLevel
        }
      }
    },
  })

  return (await getWarehouseById(id))!;
};