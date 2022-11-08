import { GraphQLResolverMap } from 'apollo-graphql';

import { IApolloServerContext } from '../../../lib/interfaces/IApolloServerContext';
import mutation from './mutation/mutation';
import query from './query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
};

export default resolvers;
