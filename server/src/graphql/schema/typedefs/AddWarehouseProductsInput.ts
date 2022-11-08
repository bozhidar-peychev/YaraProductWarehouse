import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
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
      type: new GraphQLNonNull(GraphQLInt),
      description: 'id',
    },
  },
});

export default AddWarehouseProductsInput;
