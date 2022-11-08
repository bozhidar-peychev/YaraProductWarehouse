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
  AddWarehouseProductsInput: AddWarehouseProductsInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateProductInput: CreateProductInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateWarehouseInput: CreateWarehouseInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Warehouse: ResolverTypeWrapper<Warehouse>;
  WarehouseHistoryInput: WarehouseHistoryInput;
  WarehouseHistoryType: ResolverTypeWrapper<WarehouseHistoryType>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddWarehouseProductsInput: AddWarehouseProductsInput;
  String: Scalars['String'];
  CreateProductInput: CreateProductInput;
  Boolean: Scalars['Boolean'];
  CreateWarehouseInput: CreateWarehouseInput;
  Int: Scalars['Int'];
  Mutation: {};
  Product: Product;
  ProductInput: ProductInput;
  Query: {};
  Warehouse: Warehouse;
  WarehouseHistoryInput: WarehouseHistoryInput;
  WarehouseHistoryType: WarehouseHistoryType;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addWarehouseProducts?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, Partial<MutationAddWarehouseProductsArgs>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<MutationCreateProductArgs>>;
  createWarehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, Partial<MutationCreateWarehouseArgs>>;
}>;

export type ProductResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hazardous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType>;
  warehouseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouseHistoryExported?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistoryType']>>>, ParentType, ContextType, Partial<QueryWarehouseHistoryExportedArgs>>;
  warehouseHistoryImported?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistoryType']>>>, ParentType, ContextType, Partial<QueryWarehouseHistoryImportedArgs>>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warehouse']>>>, ParentType, ContextType>;
}>;

export type WarehouseResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']> = ResolversObject<{
  currentStockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hazardous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxStockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouseHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistoryType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WarehouseHistoryTypeResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['WarehouseHistoryType'] = ResolversParentTypes['WarehouseHistoryType']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateExport?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateImport?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType>;
  warehouseId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
  WarehouseHistoryType?: WarehouseHistoryTypeResolvers<ContextType>;
}>;

