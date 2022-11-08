import { GraphQLObjectType } from 'graphql';

import addWarehouseProductsMutation from '../resolvers/mutation/addWarehouseProductsMutation';
import createProductMutation from '../resolvers/mutation/createProductMutation';
import createWarehouseMutation from '../resolvers/mutation/createWarehouseMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createWarehouse: createWarehouseMutation,
    createProduct: createProductMutation,
    addWarehouseProducts: addWarehouseProductsMutation
  },
});

export default mutationType;
