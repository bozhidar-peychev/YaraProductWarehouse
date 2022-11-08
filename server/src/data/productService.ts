import { ProductInput } from 'src/graphql/generated/graphql';

import { Product } from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await prismaContext.prisma.product.findMany();
  return products;
};

export const getProductByProductId = async (productId): Promise<ProductInput | null> => {
  return prismaContext.prisma.product.findFirst({
    where: {
      productId,
    },
  });
};

export const createProduct = async ({hazardous, productName}): Promise<Product> => {
  const product = await prismaContext.prisma.product.create({
    data: { hazardous, productName },
  });
  return product;
};
