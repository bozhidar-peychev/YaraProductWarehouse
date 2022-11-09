import MUIDataTable, {
  ExpandButton,
  MUIDataTableColumnDef,
  MUIDataTableExpandButton,
  MUIDataTableProps,
} from 'mui-datatables';
import { FC, ReactElement, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import AddwarehouseDialogForm from '../components/AddWarehouseDialogForm';
import AddWarehouseProductsDialogForm from '../components/AddWarehouseProductsDialogForm';
import ImportExportWarehouseHistoryTable from '../components/ImportExportWarehouseHistoryTable';
import { useWarehousesQuery } from '../graphql/generated/graphql';

const Warehouses: FC = (): ReactElement | null => {
  const { data } = useWarehousesQuery({});
  const [tableData, setTableData] = useState<
    {
      id?: string;
      warehouseHistory?: any;
      hazardous: string;
      currentStockLevel?: string;
      maxStockLevel?: string;
      products?: any;
    }[]
  >([]);

  const columns: MUIDataTableColumnDef[] = [
    {
      name: 'id',
      options: {
        searchable: false,
        display: 'excluded',
      },
    },
    {
      name: 'products',
      options: {
        searchable: false,
        display: 'excluded',
      },
    },
    {
      name: 'warehouseHistory',
      options: {
        searchable: false,
        display: 'excluded',
      },
    },
    {
      name: 'hazardous',
      label: 'Hazardous',
    },
    {
      name: 'currentStockLevel',
      label: 'Current Stock Level',
      options: {
        sort: true,
      },
    },
    {
      name: 'maxStockLevel',
      label: 'Max Stock Level',
      options: {
        sort: true,
      },
    },
    {
      name: 'Add Products',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: dataIndex => {
          return (
            <AddWarehouseProductsDialogForm
              id={tableData[dataIndex].id!}
              hazardous={tableData[dataIndex].hazardous === 'True'}
              warehouseProducts={tableData[dataIndex].products}
            />
          );
        },
      },
    },
  ];

  const options: MUIDataTableProps['options'] = {
    filter: false,
    fixedHeader: true,
    selectableRowsHideCheckboxes: true,
    search: false,
    download: false,
    print: false,
    viewColumns: false,
    customToolbar: () => {
      return <AddwarehouseDialogForm />;
    },
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {
      if (!tableData[dataIndex]?.warehouseHistory) return false;

      if (
        expandedRows?.data &&
        expandedRows?.data.length > 4 &&
        expandedRows?.data?.filter(d => d.dataIndex === dataIndex).length === 0
      )
        // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        return false;

      return true;
    },
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;

      return (
        <ImportExportWarehouseHistoryTable
          colSpan={colSpan}
          warehouseId={rowData[0]}
        />
      );
    },
    setRowProps: row => {
      const currentPercentage = (100 * row[3]) / row[4];

      switch (row[3]) {
        case currentPercentage > 50 && currentPercentage < 80:
          return {
            style: { backgroundColor: 'orange' },
          };
        case currentPercentage >= 100:
          return {
            style: { backgroundColor: 'red' },
          };
        default:
          return {
            style: { backgroundColor: 'Lime' },
          };
      }
    },
  };

  useEffect(() => {
    const transformedData = data?.warehouses?.map(warehouse => ({
      id: warehouse?.id,
      warehouseHistory: warehouse?.warehouseHistory,
      hazardous: warehouse?.hazardous ? 'True' : 'False',
      currentStockLevel: warehouse?.currentStockLevel?.toString(),
      maxStockLevel: warehouse?.maxStockLevel?.toString(),
      products: warehouse?.products,
    }));

    transformedData && setTableData(transformedData);
  }, [data]);

  const components = {
    ExpandButton: (props: MUIDataTableExpandButton) => {
      if (!tableData[props?.dataIndex!]?.warehouseHistory) return null;
      return <ExpandButton {...props} />;
    },
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MUIDataTable
        title={'Warehouses'}
        data={tableData}
        columns={columns}
        options={options}
        components={components}
      />
    </Box>
  );
};

export default Warehouses;
