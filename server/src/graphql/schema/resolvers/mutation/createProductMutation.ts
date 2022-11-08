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
  { input: { hazardous, productName } },
  _context,
  _info
): Promise<Product> => {
  return createProduct({hazardous, productName});
};

const createProductMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create product',
  type: ProductType,
  args: {
    input: {
      type: CreateProductInput,
    },
  },
  resolve: createProductMutationResolver,
};

export default createProductMutation;
