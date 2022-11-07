import { GraphQLObjectType } from 'graphql';

import getAllProductsQuery from '../resolvers/query/getAllProductsQuery';
import getAllWarehousesQuery from '../resolvers/query/getAllWarehousesQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    products: getAllProductsQuery,
    warehouses: getAllWarehousesQuery,
  },
});

export default queryType;
