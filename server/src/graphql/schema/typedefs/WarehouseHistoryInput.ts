import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

const WarehouseHistoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'WarehouseHistoryInput',
  description: 'Warehouse History imort/export Input',
  fields: {
    warehouseId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'the id of the warehouse',
    },
  },
});

export default WarehouseHistoryInput;
