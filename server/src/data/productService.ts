import { Product } from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await prismaContext.prisma.product.findMany();
  return products;
};

export const getProductsByWarehouse= async (warehouseId: number): Promise<Product[]> => {
  return prismaContext.prisma.product.findMany({
    where: {
      warehouseId,
    },
  });
};

export const createProduct = async (
  hazardous: boolean,
): Promise<Product> => {
  const product = await prismaContext.prisma.product.create({
    data: { hazardous },
  });
  return product;
};
