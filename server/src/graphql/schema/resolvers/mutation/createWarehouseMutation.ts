/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';

import { Warehouse } from '@prisma/client';

import { createWarehouse } from '../../../../data/warehouseService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import CreateWarehouseInput from '../../typedefs/CreateWarehouseInput';
import WarehouseType from '../../typedefs/WarehouseType';

export const createWarehouseMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { maxStockLevel, hazardous, products } },
  _context,
  _info
): Promise<Warehouse | null> => {
  return createWarehouse({maxStockLevel, hazardous, products});
};

const createWarehouseMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create warehouse',
  type: WarehouseType,
  args: {
    input: {
      type: CreateWarehouseInput,
    },
  },
  resolve: createWarehouseMutationResolver,
};

export default createWarehouseMutation;
