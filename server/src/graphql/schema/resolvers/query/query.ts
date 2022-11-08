import { getAllProductsResolver } from "./getAllProductsQuery";
import { getAllWarehousesQueryResolver } from "./getAllWarehousesQuery";
import { getWarehouseHistoryExportedByWarehouseIdResolver } from './getWarehouseHistoryExportedByWarehouseIdQuery';
import { getWarehouseHistoryImportedByWarehouseIdResolver } from './getWarehouseHistoryImportedByWarehouseIdQuery';

const query = {
  warehouses: {
    resolve: getAllWarehousesQueryResolver,
  },
  products: {
    resolve: getAllProductsResolver,
  },
  warehouseHistoryImported: {
    resolve: getWarehouseHistoryImportedByWarehouseIdResolver
  },
  warehouseHistoryExported: {
    resolve: getWarehouseHistoryExportedByWarehouseIdResolver
  }
};

export default query;
