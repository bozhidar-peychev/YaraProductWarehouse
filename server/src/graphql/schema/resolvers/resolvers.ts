import { GraphQLResolverMap } from 'apollo-graphql';

import { Product, Warehouse } from '@prisma/client';

import { getProductsByWarehouse } from '../../../data/productService';
import { IApolloServerContext } from '../../../lib/interfaces/IApolloServerContext';
import mutation from './mutation/mutation';
import query from './query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Werehouse: {
    products(warehouse: Warehouse): Promise<Product[]> {
      return getProductsByWarehouse(warehouse.warehouseId);
    },
  }
};

export default resolvers;
