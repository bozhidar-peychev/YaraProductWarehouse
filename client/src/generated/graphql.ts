import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A author */
export type Author = {
  __typename?: 'Author';
  /** id of the author */
  authorId: Scalars['ID'];
  /** list of authors books */
  books?: Maybe<Array<Maybe<Book>>>;
  /** authors username */
  username?: Maybe<Scalars['String']>;
};

/** A book */
export type Book = {
  __typename?: 'Book';
  /** author of book */
  author?: Maybe<Author>;
  /** id of the author */
  authorId?: Maybe<Scalars['Int']>;
  /** id of the book */
  bookId: Scalars['ID'];
  /** title of book */
  title?: Maybe<Scalars['String']>;
};

/** Create author input */
export type CreateAuthorInput = {
  /** The authors username */
  username: Scalars['String'];
};

/** Create book input */
export type CreateBookInput = {
  /** The authors id. */
  authorId: Scalars['Int'];
  /** The books title. */
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** create author */
  createAuthor?: Maybe<Author>;
  /** Create book */
  createBook?: Maybe<Book>;
};


export type MutationCreateAuthorArgs = {
  input?: InputMaybe<CreateAuthorInput>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<CreateBookInput>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all authors query */
  authors?: Maybe<Array<Maybe<Author>>>;
  /** Get all books query */
  books?: Maybe<Array<Maybe<Book>>>;
};

export type CreateAuthorMutationVariables = Exact<{
  input?: InputMaybe<CreateAuthorInput>;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor?: { __typename?: 'Author', authorId: string, username?: string | null } | null };

export type GetAllAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAuthorsQuery = { __typename?: 'Query', authors?: Array<{ __typename?: 'Author', authorId: string, username?: string | null } | null> | null };

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', bookId: string, title?: string | null, author?: { __typename?: 'Author', authorId: string, username?: string | null } | null } | null> | null };


export const CreateAuthorDocument = gql`
    mutation CreateAuthor($input: CreateAuthorInput) {
  createAuthor(input: $input) {
    authorId
    username
  }
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const GetAllAuthorsDocument = gql`
    query GetAllAuthors {
  authors {
    authorId
    username
  }
}
    `;

/**
 * __useGetAllAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAllAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
      }
export function useGetAllAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
        }
export type GetAllAuthorsQueryHookResult = ReturnType<typeof useGetAllAuthorsQuery>;
export type GetAllAuthorsLazyQueryHookResult = ReturnType<typeof useGetAllAuthorsLazyQuery>;
export type GetAllAuthorsQueryResult = Apollo.QueryResult<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>;
export const GetAllBooksDocument = gql`
    query GetAllBooks {
  books {
    bookId
    title
    author {
      authorId
      username
    }
  }
}
    `;

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
      }
export function useGetAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
        }
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<typeof useGetAllBooksLazyQuery>;
export type GetAllBooksQueryResult = Apollo.QueryResult<GetAllBooksQuery, GetAllBooksQueryVariables>;