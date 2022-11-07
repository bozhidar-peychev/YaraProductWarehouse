import { getAllProductsQueryResolver } from "./getAllProductsQuery";
import { getAllWarehousesQueryResolver } from "./getAllWarehousesQuery";

const query = {
  products: {
    resolve: getAllProductsQueryResolver,
  },
  warehouses: {
    resolve: getAllWarehousesQueryResolver,
  },
};

export default query;
