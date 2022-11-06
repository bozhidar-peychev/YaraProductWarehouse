import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import BookType from './BookType';

const AuthorType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Author',
  description: 'A author',
  // thunk for cyclical horribly documented
  fields: () => ({
    authorId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the author',
    },
    username: {
      type: GraphQLString,
      description: 'authors username',
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'list of authors books',
    },
  }),
});

export default AuthorType;
