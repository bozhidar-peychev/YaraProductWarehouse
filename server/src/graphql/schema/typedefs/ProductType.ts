import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';

import WarehouseType from './WarehouseType';

const ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Product',
  description: 'A product',

  fields: () => ({
    productId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the product',
    },
    warehouse: {
      type: WarehouseType,
      description: 'the warehouse of the product',
    },
    warehouseId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the id of the warehouse for the product',
    },
    hazardous: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'is the product hazardous',
    },
    date: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the date timestamp when the last import/export was made',
    },
    amount: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the amount for the last import/export that was made',
    },
  }),
});

export default ProductType;
