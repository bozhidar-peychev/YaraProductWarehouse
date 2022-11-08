import { FC, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

import Table from '../components/Table';

const Products: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">Products</Typography>
      <Table />
    </Box>
  );
};

export default Products;
