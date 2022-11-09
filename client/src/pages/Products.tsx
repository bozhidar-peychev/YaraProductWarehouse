import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableProps,
} from 'mui-datatables';
import { FC, ReactElement, useEffect, useState } from 'react';

import { Box } from '@mui/material';

import AddProductDialogForm from '../components/AddProductDialogForm';
import { useProductsQuery } from '../graphql/generated/graphql';

const columns: MUIDataTableColumnDef[] = [
  {
    name: 'productName',
    label: 'Product Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'hazardous',
    label: 'Hazardous',
    options: {
      filter: true,
      sort: true,
    },
  },
];

const options: MUIDataTableProps['options'] = {
  filter: false,
  fixedHeader: true,
  fixedSelectColumn: true,
  selectableRowsHideCheckboxes: true,
  search: true,
  download: false,
  print: false,
  viewColumns: false,
  filterType: 'dropdown',
  responsive: 'simple',
  tableBodyHeight: 'auto',
  customToolbar: () => {
    return <AddProductDialogForm />;
  },
};

const Products: FC<any> = (): ReactElement | null => {
  const { data } = useProductsQuery({});
  const [tableData, setTableData] = useState<
    {
      productName: string | null | undefined;
      hazardous: string;
    }[]
  >([]);
  useEffect(() => {
    const transformedData = data?.products?.map(product => ({
      productName: product?.productName,
      hazardous: product?.hazardous ? 'True' : 'False',
    }));

    transformedData && setTableData(transformedData);
  }, [data]);

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
        title={'Products'}
        data={tableData}
        columns={columns}
        options={options}
      />
    </Box>
  );
};

export default Products;
