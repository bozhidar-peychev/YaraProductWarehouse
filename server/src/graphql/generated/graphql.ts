import { GraphQLResolveInfo } from 'graphql';
import { IPrismaContext } from 'src/lib/interfaces/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

/** Create Product input */
export type CreateProductInput = {
  /** is the product hazardous */
  hazardous: Scalars['Boolean'];
};

/** Create Warehouse input */
export type CreateWarehouseInput = {
  /** is the warehouse hazardous */
  hazardous: Scalars['Boolean'];
  /** stock level of the warehouse */
  maxStockLevel: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** create product */
  createProduct?: Maybe<Product>;
  /** create warehouse */
  createWarehouse?: Maybe<Warehouse>;
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
  /** id of the product */
  ProductId: Scalars['ID'];
  /** amount of products for import/export */
  amount?: Maybe<Scalars['Int']>;
  /** timestamp of the import/export */
  date?: Maybe<Scalars['Int']>;
  /** is the product hazardous */
  hazardous: Scalars['Boolean'];
  /** warehouse of the product */
  warehouse?: Maybe<Warehouse>;
  /** id of the warehouse */
  warehouseId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all products query */
  product?: Maybe<Array<Maybe<Product>>>;
  /** Get all warehouses query */
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};

/** A warehouse */
export type Warehouse = {
  __typename?: 'Warehouse';
  /** current stock level of the warehouse */
  currentStockLevel?: Maybe<Scalars['Int']>;
  /** is the warehouse hazardous */
  hazardous: Scalars['Int'];
  /** max stock level of the warehouse */
  maxStockLevel: Scalars['Int'];
  /** list of products in the warehouse */
  products?: Maybe<Array<Maybe<Product>>>;
  /** id of the warehouse */
  warehouseId: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CreateProductInput: CreateProductInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateWarehouseInput: CreateWarehouseInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  Warehouse: ResolverTypeWrapper<Warehouse>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateProductInput: CreateProductInput;
  Boolean: Scalars['Boolean'];
  CreateWarehouseInput: CreateWarehouseInput;
  Int: Scalars['Int'];
  Mutation: {};
  Product: Product;
  ID: Scalars['ID'];
  Query: {};
  Warehouse: Warehouse;
  String: Scalars['String'];
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationCreateProductArgs>>;
  createWarehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, Partial<MutationCreateWarehouseArgs>>;
}>;

export type ProductResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  ProductId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hazardous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType>;
  warehouseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  product?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warehouse']>>>, ParentType, ContextType>;
}>;

export type WarehouseResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']> = ResolversObject<{
  currentStockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hazardous?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxStockLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouseId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
}>;

