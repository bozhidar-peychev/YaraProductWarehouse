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

/** Add Warehouse Products Input */
export type AddWarehouseProductsInput = {
  /** id */
  id: Scalars['String'];
  /** new products */
  products: Array<InputMaybe<ProductInput>>;
};

/** Create product input */
export type CreateProductInput = {
  /** The products hazardous status */
  hazardous: Scalars['Boolean'];
  /** The product Name */
  productName: Scalars['String'];
};

/** Create warehouse input */
export type CreateWarehouseInput = {
  /** Is the warehouse hazardous */
  hazardous: Scalars['Boolean'];
  /** The warehouse's max stock level */
  maxStockLevel: Scalars['Int'];
  /** new products */
  products?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** add warehouse products */
  addWarehouseProducts?: Maybe<Warehouse>;
  /** create product */
  createProduct?: Maybe<Product>;
  /** Create warehouse */
  createWarehouse?: Maybe<Warehouse>;
};


export type MutationAddWarehouseProductsArgs = {
  input?: InputMaybe<AddWarehouseProductsInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<CreateProductInput>;
};


export type MutationCreateWarehouseArgs = {
  input?: InputMaybe<CreateWarehouseInput>;
};

/** A product */
export type Product = {
  __typename?: 'Product';
  /** the amount for the last import/export that was made */
  amount?: Maybe<Scalars['Int']>;
  /** is the product hazardous */
  hazardous?: Maybe<Scalars['Boolean']>;
  /** id of the product */
  productId: Scalars['String'];
  /** The product Name */
  productName?: Maybe<Scalars['String']>;
  /** the warehouse of the product */
  warehouse?: Maybe<Warehouse>;
  /** the id of the warehouse for the product */
  warehouseId?: Maybe<Scalars['String']>;
};

/** product input */
export type ProductInput = {
  /** the amount for the last import/export that was made */
  amount?: InputMaybe<Scalars['Int']>;
  /** is the product hazardous */
  hazardous?: InputMaybe<Scalars['Boolean']>;
  /** id of the product */
  productId: Scalars['String'];
  /** The product Name */
  productName?: InputMaybe<Scalars['String']>;
  /** the id of the warehouse for the product */
  warehouseId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all products query */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Get specific exported warehouse history */
  warehouseHistoryExported?: Maybe<Array<Maybe<WarehouseHistoryType>>>;
  /** Get specific imported warehouse history */
  warehouseHistoryImported?: Maybe<Array<Maybe<WarehouseHistoryType>>>;
  /** Get all warehouses query */
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};


export type QueryWarehouseHistoryExportedArgs = {
  input?: InputMaybe<WarehouseHistoryInput>;
};


export type QueryWarehouseHistoryImportedArgs = {
  input?: InputMaybe<WarehouseHistoryInput>;
};

/** A warehouse */
export type Warehouse = {
  __typename?: 'Warehouse';
  /** The warehouse's current stock level */
  currentStockLevel?: Maybe<Scalars['Int']>;
  /** Is the warehouse hazardous */
  hazardous?: Maybe<Scalars['Boolean']>;
  /** The warehouse id */
  id: Scalars['String'];
  /** The warehouse's max stock level */
  maxStockLevel?: Maybe<Scalars['Int']>;
  /** The products in the warehouse */
  products?: Maybe<Array<Maybe<Product>>>;
  /** The warehouse history */
  warehouseHistory?: Maybe<Array<Maybe<WarehouseHistoryType>>>;
};

/** Warehouse History imort/export Input */
export type WarehouseHistoryInput = {
  /** the id of the warehouse */
  warehouseId: Scalars['String'];
};

/** Warehouse history */
export type WarehouseHistoryType = {
  __typename?: 'WarehouseHistoryType';
  /** The imported/exported amount */
  amount?: Maybe<Scalars['Int']>;
  /** The export date */
  dateExport?: Maybe<Scalars['Int']>;
  /** The import date */
  dateImport?: Maybe<Scalars['Int']>;
  /** The warehouse history id */
  id: Scalars['String'];
  /** The conected warehouse */
  warehouse?: Maybe<Warehouse>;
  /** The conected warehouse id */
  warehouseId?: Maybe<Scalars['String']>;
};

export type CreateProductMutationVariables = Exact<{
  input?: InputMaybe<CreateProductInput>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', productId: string, productName?: string | null, warehouseId?: string | null, hazardous?: boolean | null, amount?: number | null } | null };

export type CreateWarehouseMutationVariables = Exact<{
  input?: InputMaybe<CreateWarehouseInput>;
}>;


export type CreateWarehouseMutation = { __typename?: 'Mutation', createWarehouse?: { __typename?: 'Warehouse', id: string, maxStockLevel?: number | null, currentStockLevel?: number | null, hazardous?: boolean | null } | null };

export type AddWarehouseProductsMutationVariables = Exact<{
  input?: InputMaybe<AddWarehouseProductsInput>;
}>;


export type AddWarehouseProductsMutation = { __typename?: 'Mutation', addWarehouseProducts?: { __typename?: 'Warehouse', id: string, maxStockLevel?: number | null, currentStockLevel?: number | null, hazardous?: boolean | null } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', productId: string, productName?: string | null, warehouseId?: string | null, hazardous?: boolean | null, amount?: number | null } | null> | null };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'Query', warehouses?: Array<{ __typename?: 'Warehouse', id: string, maxStockLevel?: number | null, currentStockLevel?: number | null, hazardous?: boolean | null, products?: Array<{ __typename?: 'Product', productId: string, productName?: string | null, warehouseId?: string | null, hazardous?: boolean | null, amount?: number | null } | null> | null } | null> | null };

export type WarehouseHistoryImportedQueryVariables = Exact<{
  input?: InputMaybe<WarehouseHistoryInput>;
}>;


export type WarehouseHistoryImportedQuery = { __typename?: 'Query', warehouseHistoryImported?: Array<{ __typename?: 'WarehouseHistoryType', id: string, warehouseId?: string | null, dateImport?: number | null, dateExport?: number | null, amount?: number | null } | null> | null };

export type WarehouseHistoryExportedQueryVariables = Exact<{
  input?: InputMaybe<WarehouseHistoryInput>;
}>;


export type WarehouseHistoryExportedQuery = { __typename?: 'Query', warehouseHistoryExported?: Array<{ __typename?: 'WarehouseHistoryType', id: string, warehouseId?: string | null, dateImport?: number | null, dateExport?: number | null, amount?: number | null } | null> | null };


export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput) {
  createProduct(input: $input) {
    productId
    productName
    warehouseId
    hazardous
    amount
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const CreateWarehouseDocument = gql`
    mutation CreateWarehouse($input: CreateWarehouseInput) {
  createWarehouse(input: $input) {
    id
    maxStockLevel
    currentStockLevel
    hazardous
  }
}
    `;
export type CreateWarehouseMutationFn = Apollo.MutationFunction<CreateWarehouseMutation, CreateWarehouseMutationVariables>;

/**
 * __useCreateWarehouseMutation__
 *
 * To run a mutation, you first call `useCreateWarehouseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWarehouseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWarehouseMutation, { data, loading, error }] = useCreateWarehouseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWarehouseMutation(baseOptions?: Apollo.MutationHookOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWarehouseMutation, CreateWarehouseMutationVariables>(CreateWarehouseDocument, options);
      }
export type CreateWarehouseMutationHookResult = ReturnType<typeof useCreateWarehouseMutation>;
export type CreateWarehouseMutationResult = Apollo.MutationResult<CreateWarehouseMutation>;
export type CreateWarehouseMutationOptions = Apollo.BaseMutationOptions<CreateWarehouseMutation, CreateWarehouseMutationVariables>;
export const AddWarehouseProductsDocument = gql`
    mutation AddWarehouseProducts($input: AddWarehouseProductsInput) {
  addWarehouseProducts(input: $input) {
    id
    maxStockLevel
    currentStockLevel
    hazardous
  }
}
    `;
export type AddWarehouseProductsMutationFn = Apollo.MutationFunction<AddWarehouseProductsMutation, AddWarehouseProductsMutationVariables>;

/**
 * __useAddWarehouseProductsMutation__
 *
 * To run a mutation, you first call `useAddWarehouseProductsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWarehouseProductsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWarehouseProductsMutation, { data, loading, error }] = useAddWarehouseProductsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddWarehouseProductsMutation(baseOptions?: Apollo.MutationHookOptions<AddWarehouseProductsMutation, AddWarehouseProductsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWarehouseProductsMutation, AddWarehouseProductsMutationVariables>(AddWarehouseProductsDocument, options);
      }
export type AddWarehouseProductsMutationHookResult = ReturnType<typeof useAddWarehouseProductsMutation>;
export type AddWarehouseProductsMutationResult = Apollo.MutationResult<AddWarehouseProductsMutation>;
export type AddWarehouseProductsMutationOptions = Apollo.BaseMutationOptions<AddWarehouseProductsMutation, AddWarehouseProductsMutationVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    productId
    productName
    warehouseId
    hazardous
    amount
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const WarehousesDocument = gql`
    query Warehouses {
  warehouses {
    id
    maxStockLevel
    currentStockLevel
    hazardous
    products {
      productId
      productName
      warehouseId
      hazardous
      amount
    }
  }
}
    `;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;
export const WarehouseHistoryImportedDocument = gql`
    query WarehouseHistoryImported($input: WarehouseHistoryInput) {
  warehouseHistoryImported(input: $input) {
    id
    warehouseId
    dateImport
    dateExport
    amount
  }
}
    `;

/**
 * __useWarehouseHistoryImportedQuery__
 *
 * To run a query within a React component, call `useWarehouseHistoryImportedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseHistoryImportedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseHistoryImportedQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseHistoryImportedQuery(baseOptions?: Apollo.QueryHookOptions<WarehouseHistoryImportedQuery, WarehouseHistoryImportedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseHistoryImportedQuery, WarehouseHistoryImportedQueryVariables>(WarehouseHistoryImportedDocument, options);
      }
export function useWarehouseHistoryImportedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseHistoryImportedQuery, WarehouseHistoryImportedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseHistoryImportedQuery, WarehouseHistoryImportedQueryVariables>(WarehouseHistoryImportedDocument, options);
        }
export type WarehouseHistoryImportedQueryHookResult = ReturnType<typeof useWarehouseHistoryImportedQuery>;
export type WarehouseHistoryImportedLazyQueryHookResult = ReturnType<typeof useWarehouseHistoryImportedLazyQuery>;
export type WarehouseHistoryImportedQueryResult = Apollo.QueryResult<WarehouseHistoryImportedQuery, WarehouseHistoryImportedQueryVariables>;
export const WarehouseHistoryExportedDocument = gql`
    query WarehouseHistoryExported($input: WarehouseHistoryInput) {
  warehouseHistoryExported(input: $input) {
    id
    warehouseId
    dateImport
    dateExport
    amount
  }
}
    `;

/**
 * __useWarehouseHistoryExportedQuery__
 *
 * To run a query within a React component, call `useWarehouseHistoryExportedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseHistoryExportedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseHistoryExportedQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWarehouseHistoryExportedQuery(baseOptions?: Apollo.QueryHookOptions<WarehouseHistoryExportedQuery, WarehouseHistoryExportedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseHistoryExportedQuery, WarehouseHistoryExportedQueryVariables>(WarehouseHistoryExportedDocument, options);
      }
export function useWarehouseHistoryExportedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseHistoryExportedQuery, WarehouseHistoryExportedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseHistoryExportedQuery, WarehouseHistoryExportedQueryVariables>(WarehouseHistoryExportedDocument, options);
        }
export type WarehouseHistoryExportedQueryHookResult = ReturnType<typeof useWarehouseHistoryExportedQuery>;
export type WarehouseHistoryExportedLazyQueryHookResult = ReturnType<typeof useWarehouseHistoryExportedLazyQuery>;
export type WarehouseHistoryExportedQueryResult = Apollo.QueryResult<WarehouseHistoryExportedQuery, WarehouseHistoryExportedQueryVariables>;