import { FC, ReactElement } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Stock Management Application
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              variant="subtitle1"
              align="center"
            >
              {`${new Date().getFullYear()} | Material UI | React Router | Yup | Formik | TypeScript/JavaScript | NodeJS | ReactJS | GraphQL – Apollo server | PostgreSQL | Rest API`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
