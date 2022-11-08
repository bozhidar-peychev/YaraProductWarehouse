import { FC, ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

const Warehouses: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Warehouses</Typography>
    </Box>
  );
};

export default Warehouses;
