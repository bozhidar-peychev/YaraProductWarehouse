import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import ProductType from './ProductType';

const WarehouseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Warehouse',
  description: 'A Warehouse',
  fields: () => ({
    warehouseId: {
      type: new GraphQLNonNull(GraphQLID),
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
      type:new GraphQLNonNull(GraphQLBoolean),
      description: 'Is the warehouse hazardous',
    },
    products: {
      type: new GraphQLList(ProductType),
      description: 'The products in the warehouse',
    }
  }),
});

export default WarehouseType;
