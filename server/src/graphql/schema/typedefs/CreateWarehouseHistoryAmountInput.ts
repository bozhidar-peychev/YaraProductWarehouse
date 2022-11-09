import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const CreateWarehouseHistoryAmountInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateWarehouseHistoryAmountInput',
  description: 'Add Warehouse Products Input',
  fields: {
    warehouseHistoryId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "warehouseHistoryId",
    },
    productId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'productId',
    },
    amount: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'productId',
    },
  },
});

export default CreateWarehouseHistoryAmountInput;
