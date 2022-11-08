import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';

import { Warehouse } from '@prisma/client';

import { addWarehouseProducts } from '../../../../data/warehouseService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import AddWarehouseProductsInput from '../../typedefs/AddWarehouseProductsInput';
import WarehouseType from '../../typedefs/WarehouseType';

export const addWarehouseProductsMutationResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { id, products } },
  _context,
  _info
): Promise<Warehouse> => {
  return addWarehouseProducts({id, products});
};

const addWarehouseProductsMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'add warehouse products',
  type: WarehouseType,
  args: {
    input: {
      type: AddWarehouseProductsInput,
    },
  },
  resolve: addWarehouseProductsMutationResolver,
};

export default addWarehouseProductsMutation;
