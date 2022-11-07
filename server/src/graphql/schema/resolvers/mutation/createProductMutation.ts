/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';

import { Product } from '@prisma/client';

import { createProduct } from '../../../../data/productService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import CreateProductInput from '../../typedefs/CreateProductInput';
import ProductType from '../../typedefs/ProductType';

export const createProductMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { hazardous } },
  _context,
  _info
): Promise<Product> => {
  return createProduct(hazardous);
};

const createProductMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create product',
  type: ProductType,
  args: {
    input: {
      type: CreateProductInput,
    },
  },
  resolve: createProductMutationResolver,
};

export default createProductMutation;
