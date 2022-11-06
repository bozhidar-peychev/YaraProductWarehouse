import { GraphQLObjectType } from 'graphql';

import createAuthorMutation from '../resolvers/mutation/createAuthorMutation';
import createBookMutation from '../resolvers/mutation/createBookMutation';

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBook: createBookMutation,
    createAuthor: createAuthorMutation,
  },
});

export default mutationType;
