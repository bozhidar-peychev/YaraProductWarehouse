import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';

import { Warehouse } from '@prisma/client';

import { getAllWerehouses } from '../../../../data/werehouseService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import WarehouseType from '../../typedefs/WarehouseType';

export const getAllWarehousesQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Warehouse[]> => {
  const warehouses = await getAllWerehouses();
  return warehouses;
};

const getAllWerehousesQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all warehouses query',
  type: new GraphQLList(WarehouseType),
  resolve: getAllWarehousesQueryResolver,
};

export default getAllWerehousesQuery;
