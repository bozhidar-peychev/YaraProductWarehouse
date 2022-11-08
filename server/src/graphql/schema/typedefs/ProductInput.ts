import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';

const ProductInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'ProductInput',
  description: 'product input',
  fields: {
    productId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id of the product',
    },
    productName: {
      type: GraphQLString,
      description: 'The product Name',
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
  },
});

export default ProductInput;
