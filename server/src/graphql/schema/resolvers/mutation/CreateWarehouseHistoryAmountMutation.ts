import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';

import { Amount } from '@prisma/client';

import { createWarehouseHistoryAmount } from '../../../../data/WarehouseHistoryService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import CreateWarehouseHistoryAmountInput from '../../typedefs/CreateWarehouseHistoryAmountInput';
import WarehouseType from '../../typedefs/WarehouseType';

export const createWarehouseHistoryAmountResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { warehouseHistoryId, productId, amount } },
  _context,
  _info
): Promise<Amount | null> => {
  return createWarehouseHistoryAmount({warehouseHistoryId, productId, amount});
};

const createWarehouseHistoryAmountMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'create warehouse history amount',
  type: WarehouseType,
  args: {
    input: {
      type: CreateWarehouseHistoryAmountInput,
    },
  },
  resolve: createWarehouseHistoryAmountResolver,
};

export default createWarehouseHistoryAmountMutation;
