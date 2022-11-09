import { Form, Formik } from 'formik';
import { FC, useEffect, useState } from 'react';
import * as Yup from 'yup';

import { useApolloClient } from '@apollo/client';
import {
  Button,
  Grid,
  TextField,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import {
  Autocomplete,
  Chip,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';

import {
  InputMaybe,
  ProductInput,
  useAddWarehouseProductsMutation,
  useProductsQuery,
} from '../graphql/generated/graphql';

const ProductsAutocomplete: FC<{
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  products: InputMaybe<ProductInput>[];
  hazardous: boolean;
  warehouseProducts: any;
}> = ({ products, setFieldValue, hazardous, warehouseProducts }) => {
  const { data } = useProductsQuery({});
  const [value, setValue] = useState<{
    productName: string | null | undefined;
    productId: string | undefined;
  } | null>(null);
  const [amountValue, setAmountValue] = useState(0);
  const [textValue, setTextValue] = useState('');
  const [options, setOptions] = useState<
    {
      productName: string | null | undefined;
      productId: string | undefined;
    }[]
  >([]);

  useEffect(() => {
    const transformedData = data?.products
      ?.filter(
        p =>
          p?.hazardous === hazardous &&
          !warehouseProducts.find((wp: any) => wp.productId === p?.productId) &&
          !products.find((wp: any) => wp.productId === p?.productId)
      )
      .map(product => ({
        productName: product?.productName,
        productId: product?.productId,
      }));

    transformedData && setOptions(transformedData);
  }, [data, hazardous, warehouseProducts, products]);

  return (
    <Grid container justifyContent="space-around" direction="row" spacing={1}>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Autocomplete
          id="productName"
          options={options}
          getOptionLabel={option => option.productName!}
          fullWidth
          value={value}
          disabled={options.length === 0}
          onChange={(_event, value) => setValue(value!)}
          renderInput={params => (
            <TextField
              {...params}
              onChange={event => setTextValue(event.target.value!)}
              margin="normal"
              label="Product"
              variant="outlined"
              fullWidth
              value={textValue}
            />
          )}
        />
      </Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <TextField
          name="ProductAmount"
          id="ProductAmount"
          label="Product Amount"
          value={amountValue}
          fullWidth
          disabled={options.length === 0}
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          variant="outlined"
          onChange={e => setAmountValue(Number(e.target.value))}
        />
      </Grid>
      <Grid item lg={10} md={10} sm={10} xs={10}>
        <Button
          onClick={() => {
            if (!amountValue || !value?.productId) return;
            setFieldValue(
              'products',
              products.length > 0
                ? [
                    ...products,
                    {
                      productId: value?.productId,
                      amount: amountValue,
                      productName: value.productName,
                    },
                  ]
                : [
                    {
                      productId: value?.productId,
                      amount: amountValue,
                      productName: value.productName,
                    },
                  ]
            );
            setAmountValue(0);
            setValue(null);
            setTextValue('');
          }}
          variant="contained"
          color="primary"
          disabled={
            !!products.find(p => value?.productId === p?.productId) ||
            options.length === 0
          }
        >
          Add Product
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '450px',
      display: 'block',
      margin: '0 auto',
    },
    textField: {
      '& > *': {
        width: '100%',
      },
    },
    submitButton: {
      marginTop: '24px',
    },
    title: { textAlign: 'center' },
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' },
    radioFlexRow: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '8px',
    },
  })
);

interface IFormValues {
  id: string;
  products: InputMaybe<ProductInput>[];
}

const AddWarehouseProductsDialogForm: FC<{
  id: string;
  hazardous: boolean;
  warehouseProducts: any;
}> = ({ id, hazardous, warehouseProducts }) => {
  const [open, setOpen] = useState(false);
  const apolloClient = useApolloClient();
  const [AddWarehouseProductsMutation] = useAddWarehouseProductsMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const AddWarehouseProducts = async (
    { id, products }: IFormValues,
    resetForm: Function
  ) => {
    await AddWarehouseProductsMutation({
      variables: {
        input: {
          id,
          products: products.map(p => ({
            productId: p?.productId!,
            amount: p?.amount,
          })),
        },
      },
      onCompleted: async () => {
        resetForm({});
        handleClose();
        return apolloClient.refetchQueries({ include: ['Warehouses'] });
      },
      onError: async () => console.log('error with request'),
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Products
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className={classes.root}>
            <Formik
              initialValues={{
                id,
                products: [],
              }}
              onSubmit={(values: IFormValues, actions) => {
                AddWarehouseProducts(values, actions.resetForm);
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                id: Yup.string().required(
                  'Please set the max warehouse stock level!'
                ),
                products: Yup.array()
                  .of(
                    Yup.object().shape({
                      productId: Yup.string(),
                      amount: Yup.number(),
                    })
                  )
                  .compact(v => !(v.productId && v.amount))
                  .required('Please select the type of the warehouse!'),
              })}
            >
              {props => {
                const { values, setFieldValue, isSubmitting } = props;
                return (
                  <Form>
                    <Typography variant="h4" className={classes.title}>
                      Add Products
                    </Typography>
                    <Grid
                      container
                      justifyContent="space-around"
                      direction="row"
                    >
                      <ProductsAutocomplete
                        setFieldValue={setFieldValue}
                        products={values.products}
                        hazardous={hazardous}
                        warehouseProducts={warehouseProducts}
                      />

                      <Grid
                        item
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className={classes.submitButton}
                      >
                        {values.products.map(option => (
                          <Chip
                            variant="outlined"
                            label={option?.productName + ' - ' + option?.amount}
                          />
                        ))}
                      </Grid>
                      <Grid
                        item
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className={classes.submitButton}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={
                            isSubmitting || values.products.length === 0
                          }
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddWarehouseProductsDialogForm;
