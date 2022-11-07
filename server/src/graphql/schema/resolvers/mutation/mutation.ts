import { createProductMutationResolver } from "./createProductMutation";
import { createWarehouseMutationResolver } from "./createWarehouseMutation";

const mutation = {
  createProduct: {
    resolve: createProductMutationResolver,
  },
  createWarehouse: {
    resolve: createWarehouseMutationResolver,
  },
};

export default mutation;
