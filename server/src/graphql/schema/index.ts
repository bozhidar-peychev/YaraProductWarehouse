import { gql } from 'apollo-server';
import { GraphQLSchema, printSchema } from 'graphql';

import { makeExecutableSchema } from '@graphql-tools/schema';

import resolvers from './resolvers/resolvers';
import mutationType from './typedefs/MutationType';
import queryType from './typedefs/QueryType';

const schema = makeExecutableSchema({
  typeDefs: gql(
    printSchema(
      new GraphQLSchema({
        query: queryType,
        mutation: mutationType,
      })
    )
  ),
  resolvers,
});

export default schema;
