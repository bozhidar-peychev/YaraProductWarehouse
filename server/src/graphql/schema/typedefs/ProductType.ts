import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import WarehouseType from './WarehouseType';

const ProductType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Product',
  description: 'A product',
  fields: () => ({
    productId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the product',
    },
    productName: {
      type: GraphQLString,
      description: 'The product Name',
    },
    warehouse: {
      type: WarehouseType,
      description: 'the warehouse of the product',
    },
    warehouseId: {
      type: GraphQLInt,
      description: 'the id of the warehouse for the product',
    },
    hazardous: {
      type: GraphQLBoolean,
      description: 'is the product hazardous',
    },
    amount: {
      type: GraphQLInt,
      description: 'the amount for the last import/export that was made',
    },
  }),
});

export default ProductType;
