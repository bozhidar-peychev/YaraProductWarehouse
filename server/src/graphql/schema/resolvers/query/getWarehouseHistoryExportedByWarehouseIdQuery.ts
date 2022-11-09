import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';
import { WarehouseHistoryType as WarehouseHistory } from 'src/graphql/generated/graphql';

import { getWarehouseHistoryExportedByWarehouseId } from '../../../../data/WarehouseHistoryService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import WarehouseHistoryInput from '../../typedefs/WarehouseHistoryInput';
import WarehouseHistoryType from '../../typedefs/WarehouseHistoryType';

export const getWarehouseHistoryExportedByWarehouseIdResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (
  _source,
  { input: { warehouseId } },
  _context,
  _info
): Promise< WarehouseHistory[]> => {
  return getWarehouseHistoryExportedByWarehouseId(warehouseId);
};
const getWarehouseHistoryExportedByWarehouseIdQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get specific exported warehouse history',
  type: new GraphQLList(WarehouseHistoryType),
  args: {
    input: {
      type: WarehouseHistoryInput,
    },
  },
  resolve: getWarehouseHistoryExportedByWarehouseIdResolver,
};

export default getWarehouseHistoryExportedByWarehouseIdQuery;
