import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import ProductInput from './ProductInput';

const CreateWarehouseInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateWarehouseInput',
  description: 'Create warehouse input',
  fields: {
    maxStockLevel: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "The warehouse's max stock level",
    },
    hazardous: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Is the warehouse hazardous',
    },
    products: {
      type: new GraphQLList(ProductInput),
      description: "new products",
    },
  },
});

export default CreateWarehouseInput;
