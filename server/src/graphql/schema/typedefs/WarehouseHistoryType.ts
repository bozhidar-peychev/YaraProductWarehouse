import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import CreateWarehouseHistoryAmountType from './CreateWarehouseHistoryAmountType';
import WarehouseType from './WarehouseType';

const WarehouseHistoryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'WarehouseHistoryType',
  description: 'Warehouse history',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The warehouse history id",
    },
    warehouseId: {
      type: GraphQLString,
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
      type: new GraphQLList(CreateWarehouseHistoryAmountType),
      description: "The imported/exported amount",
    }, 
  }),
});

export default WarehouseHistoryType;
