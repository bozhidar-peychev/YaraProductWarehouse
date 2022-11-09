import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { WarehouseHistoryType as WarehouseHistory } from 'src/graphql/generated/graphql';

import { getWarehouseHistoryImportedByWarehouseId } from '../../../../data/WarehouseHistoryService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import WarehouseHistoryInput from '../../typedefs/WarehouseHistoryInput';
import WarehouseHistoryType from '../../typedefs/WarehouseHistoryType';

export const getWarehouseHistoryImportedByWarehouseIdResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { warehouseId } },
  _context,
  _info
): Promise<WarehouseHistory[]> => {
  return getWarehouseHistoryImportedByWarehouseId(warehouseId);
};
const getWarehouseHistoryImportedByWarehouseIdQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get specific imported warehouse history',
  type: new GraphQLList(WarehouseHistoryType),
  args: {
    input: {
      type: WarehouseHistoryInput,
    },
  },
  resolve: getWarehouseHistoryImportedByWarehouseIdResolver,
};

export default getWarehouseHistoryImportedByWarehouseIdQuery;
