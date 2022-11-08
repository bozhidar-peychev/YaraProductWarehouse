import { GraphQLObjectType } from 'graphql';

import getAllProductsQuery from '../resolvers/query/getAllProductsQuery';
import getAllWarehousesQuery from '../resolvers/query/getAllWarehousesQuery';
import getWarehouseHistoryExportedByWarehouseIdQuery from '../resolvers/query/getWarehouseHistoryExportedByWarehouseIdQuery';
import getWarehouseHistoryImportedByWarehouseIdQuery from '../resolvers/query/getWarehouseHistoryImportedByWarehouseIdQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    warehouses: getAllWarehousesQuery,
    products: getAllProductsQuery,
    warehouseHistoryImported: getWarehouseHistoryImportedByWarehouseIdQuery,
    warehouseHistoryExported: getWarehouseHistoryExportedByWarehouseIdQuery
  },
});

export default queryType;
