import { addWarehouseProductsMutationResolver } from './addWarehouseProductsMutation';
import { createProductMutationResolver } from "./createProductMutation";
import { createWarehouseMutationResolver } from "./createWarehouseMutation";

const mutation = {
  createWarehouse: {
    resolve: createWarehouseMutationResolver,
  },
  createProduct: {
    resolve: createProductMutationResolver,
  },
  addWarehouseProducts: {
    resolve: addWarehouseProductsMutationResolver
  }
};

export default mutation;
