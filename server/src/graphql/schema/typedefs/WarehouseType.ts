import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ProductType from './ProductType';
import WarehouseHistoryType from './WarehouseHistoryType';

const WarehouseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Warehouse',
  description: 'A warehouse',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The warehouse id",
    },
    maxStockLevel: {
      type: GraphQLInt,
      description: "The warehouse's max stock level",
    },
    currentStockLevel: {
      type: GraphQLInt,
      description: "The warehouse's current stock level",
    }, 
    hazardous: {
      type: GraphQLBoolean,
      description: 'Is the warehouse hazardous',
    },
    products: {
      type: new GraphQLList(ProductType),
      description: 'The products in the warehouse',
    },
    warehouseHistory: {
      type: new GraphQLList(WarehouseHistoryType),
      description: 'The warehouse history',
    }
  }),
});

export default WarehouseType;
