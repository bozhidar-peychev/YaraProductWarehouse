import { GraphQLResolverMap } from 'apollo-graphql';

import { Author, Book } from '@prisma/client';

import { getAuthorById } from '../../../data/authorService';
import { getBooksByAuthor } from '../../../data/bookService';
import { IApolloServerContext } from '../../../lib/interfaces/IApolloServerContext';
import mutation from './mutation/mutation';
import query from './query/query';

const resolvers: GraphQLResolverMap<IApolloServerContext> = {
  Query: query,
  Mutation: mutation,
  Book: {
    author(book: Book): Promise<Author | null> {
      return getAuthorById(book.authorId);
    },
  },
  Author: {
    books(author: Author): Promise<Book[]> {
      return getBooksByAuthor(author.authorId);
    },
  },
  // User: {
  //   // eslint-disable-next-line no-underscore-dangle
  //   __resolveReference(book, _args, context: IApolloServerContext) {
  //     console.log('calling resolveRefearance');
  //     return context.prismaContext.prisma.user.findUnique({
  //       where: {
  //         id: book.userId,
  //       },
  //     });
  //   },
  // },
};

export default resolvers;
