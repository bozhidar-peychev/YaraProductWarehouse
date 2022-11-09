import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import WarehouseHistoryType from './WarehouseHistoryType';

const CreateWarehouseHistoryAmountType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Amount',
  description: 'An amount',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'id of the amount',
    },
    productId: {
      type: GraphQLString,
      description: 'The product id',
    },
    warehouseHistory: {
      type: WarehouseHistoryType,
      description: 'the warehouse history of the amount',
    },
    warehouseHistoryId: {
      type: GraphQLString,
      description: 'the id of the warehouse history for the amount',
    },
    amount: {
      type: GraphQLInt,
      description: 'the amount',
    },
  }),
});

export default CreateWarehouseHistoryAmountType;
