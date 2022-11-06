import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import AuthorType from './AuthorType';

const BookType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Book',
  description: 'A book',
  // thunk to refer to author type
  fields: () => ({
    bookId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the book',
    },
    title: {
      type: GraphQLString,
      description: 'title of book',
    },
    author: {
      type: AuthorType,
      description: 'author of book',
    },
    authorId: {
      type: GraphQLInt,
      description: 'id of the author',
    },
  }),
});

export default BookType;
