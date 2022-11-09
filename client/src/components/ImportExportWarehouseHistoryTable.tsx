import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableProps,
} from 'mui-datatables';
import { FC, ReactElement, useEffect, useState } from 'react';

import {
  FormControlLabel,
  FormGroup,
  Switch,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import {
  useWarehouseHistoryExportedQuery,
  useWarehouseHistoryImportedQuery,
} from '../graphql/generated/graphql';

const options: MUIDataTableProps['options'] = {
  filter: false,
  fixedHeader: true,
  fixedSelectColumn: true,
  selectableRowsHideCheckboxes: true,
  search: false,
  download: false,
  print: false,
  viewColumns: false,
  filterType: 'dropdown',
  responsive: 'simple',
  tableBodyHeight: 'auto',
};

const ImportWarehouseHistoryTable: FC<{
  warehouseId: string;
}> = ({ warehouseId }): ReactElement => {
  const { data } = useWarehouseHistoryImportedQuery({
    variables: { input: { warehouseId } },
  });
  const [tableData, setTableData] = useState<
    {
      dateImport: number | null | undefined;
      amount: number | null | undefined;
    }[]
  >([]);

  useEffect(() => {
    const transformedData = data?.warehouseHistoryImported?.map(
      warehouseHistoryImported => ({
        dateImport: warehouseHistoryImported?.dateImport,
        amount: warehouseHistoryImported?.amount,
      })
    );

    transformedData && setTableData(transformedData);
  }, [data]);

  const columns: MUIDataTableColumnDef[] = [
    {
      name: 'dateImport',
      label: 'Import Date',
      options: {
        filter: true,
        sort: true,
        customBodyRenderLite: dataIndex => {
          return (
            <Typography>
              {new Date(tableData[dataIndex].dateImport! * 1000)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          );
        },
      },
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <MUIDataTable
      title={'Imported'}
      data={tableData}
      columns={columns}
      options={options}
    />
  );
};

const ExportWarehouseHistoryTable: FC<{
  warehouseId: string;
}> = ({ warehouseId }): ReactElement => {
  const { data } = useWarehouseHistoryExportedQuery({
    variables: { input: { warehouseId } },
  });
  const [tableData, setTableData] = useState<
    {
      dateExport: number | null | undefined;
      amount: number | null | undefined;
    }[]
  >([]);

  useEffect(() => {
    const transformedData = data?.warehouseHistoryExported?.map(
      warehouseHistoryExported => ({
        dateExport: warehouseHistoryExported?.dateExport,
        amount: warehouseHistoryExported?.amount,
      })
    );

    transformedData && setTableData(transformedData);
  }, [data]);

  const columns: MUIDataTableColumnDef[] = [
    {
      name: 'dateExport',
      label: 'Export Date',
      options: {
        sort: true,
        customBodyRenderLite: dataIndex => {
          return (
            <Typography>
              {new Date(tableData[dataIndex].dateExport! * 1000)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}
            </Typography>
          );
        },
      },
    },
    {
      name: 'amount',
      label: 'Amount',
      options: {
        sort: true,
      },
    },
  ];

  return (
    <MUIDataTable
      title={'Exported'}
      data={tableData}
      columns={columns}
      options={options}
    />
  );
};

const ImportExportWarehouseHistoryTable: FC<{
  warehouseId: string;
  colSpan: number;
}> = ({ warehouseId, colSpan }): ReactElement => {
  const [value, setValue] = useState(true);
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <FormGroup>
          <FormControlLabel
            value={value}
            onChange={() => setValue(!value)}
            control={<Switch defaultChecked />}
            label={value ? 'Export' : 'Import'}
          />
        </FormGroup>
        {value ? (
          <ImportWarehouseHistoryTable warehouseId={warehouseId} />
        ) : (
          <ExportWarehouseHistoryTable warehouseId={warehouseId} />
        )}
      </TableCell>
    </TableRow>
  );
};

export default ImportExportWarehouseHistoryTable;
