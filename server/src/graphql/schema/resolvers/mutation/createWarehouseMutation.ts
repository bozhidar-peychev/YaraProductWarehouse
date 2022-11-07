import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';

import { Warehouse } from '@prisma/client';

import { createWarehouse } from '../../../../data/werehouseService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import CreateWarehouseInput from '../../typedefs/CreateWarehouseInput';
import WarehouseType from '../../typedefs/WarehouseType';

export const createWarehouseMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { maxStockLevel, hazardous } },
  _context,
  _info
): Promise<Warehouse> => {
  return createWarehouse(maxStockLevel, hazardous);
};

const createWarehouseMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create warehouse',
  type: WarehouseType,
  args: {
    input: {
      type: CreateWarehouseInput,
    },
  },
  resolve: createWarehouseMutationResolver,
};

export default createWarehouseMutation;
