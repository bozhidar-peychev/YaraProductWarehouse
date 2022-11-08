import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import ProductInput from './ProductInput';

const AddWarehouseProductsInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'AddWarehouseProductsInput',
  description: 'Add Warehouse Products Input',
  fields: {
    products: {
      type: new GraphQLNonNull(new GraphQLList(ProductInput)),
      description: "new products",
    },
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'id',
    },
  },
});

export default AddWarehouseProductsInput;
