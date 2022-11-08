import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import WarehouseType from './WarehouseType';

const WarehouseHistoryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'WarehouseHistoryType',
  description: 'Warehouse history',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The warehouse history id",
    },
    warehouseId: {
      type: GraphQLInt,
      description: "The conected warehouse id",
    },
    warehouse: {
      type: WarehouseType,
      description: "The conected warehouse",
    }, 
    dateImport: {
      type: GraphQLInt,
      description: "The import date",
      },
    dateExport: {
      type: GraphQLInt,
      description: "The export date",
      }, 
    amount: {
      type: GraphQLInt,
      description: "The imported/exported amount",
    }, 
  }),
});

export default WarehouseHistoryType;
