import { GraphQLObjectType } from 'graphql';

import createProductMutation from '../resolvers/mutation/createProductMutation';
import createWarehouseMutation from '../resolvers/mutation/createWarehouseMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createProduct: createProductMutation,
    createWarehouse: createWarehouseMutation,
  },
});

export default mutationType;
