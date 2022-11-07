import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';

import { Product } from '@prisma/client';

import { getAllProducts } from '../../../../data/productService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import ProductType from '../../typedefs/ProductType';

export const getAllProductsQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Product[]> => {
  const products = await getAllProducts();
  return products;
};

const getAllProductsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all products query',
  type: new GraphQLList(ProductType),
  resolve: getAllProductsQueryResolver,
};

export default getAllProductsQuery;
