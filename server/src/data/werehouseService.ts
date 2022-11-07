import { Product, Warehouse } from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';

export const getAllWerehouses = async (): Promise<Warehouse[]> => {
  const warehouses = await prismaContext.prisma.warehouse.findMany();
  return warehouses;
};

export const createWarehouse = async (maxStockLevel: number, hazardous: boolean): Promise<Warehouse> => {
  const warehouse = await prismaContext.prisma.warehouse.create({
    data: { maxStockLevel, hazardous },
  });
  return warehouse;
};
