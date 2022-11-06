import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from 'graphql';

import { Author } from '@prisma/client';

import { getAllAuthors } from '../../../../data/authorService';
import { IApolloServerContext } from '../../../../lib/interfaces/IApolloServerContext';
import AuthorType from '../../typedefs/AuthorType';

export const getAllAuthorsResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<Author[]> => {
  const authors = await getAllAuthors();
  return authors;
};

const getAllAuthorsQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Get all authors query',
  type: new GraphQLList(AuthorType),
  resolve: getAllAuthorsResolver,
};

export default getAllAuthorsQuery;
