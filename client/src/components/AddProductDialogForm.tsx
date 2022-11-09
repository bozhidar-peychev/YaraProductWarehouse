import { Form, Formik, FormikProps } from 'formik';
import { FC, useState } from 'react';
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
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import { useCreateProductMutation } from '../graphql/generated/graphql';

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
  productName: string;
  hazardous: string;
}

const AddProductDialogForm: FC = () => {
  const [open, setOpen] = useState(false);
  const apolloClient = useApolloClient();
  const [createProductMutation] = useCreateProductMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const createProduct = async (
    { productName, hazardous }: IFormValues,
    resetForm: Function
  ) => {
    await createProductMutation({
      variables: { input: { productName, hazardous: hazardous === 'true' } },
      onCompleted: async () => {
        resetForm({});
        handleClose();
        return apolloClient.refetchQueries({ include: ['Products'] });
      },
      onError: async () => console.log('error with request'),
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className={classes.root}>
            <Formik
              initialValues={{
                productName: '',
                hazardous: '',
              }}
              onSubmit={(values: IFormValues, actions) => {
                createProduct(values, actions.resetForm);
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                productName: Yup.string().required(
                  'Please type a product name!'
                ),
                hazardous: Yup.string().required(
                  'Please select the type of the product!'
                ),
              })}
            >
              {(props: FormikProps<IFormValues>) => {
                const {
                  values,
                  touched,
                  errors,
                  handleBlur,
                  handleChange,
                  isSubmitting,
                } = props;
                return (
                  <Form>
                    <Typography variant="h4" className={classes.title}>
                      Add Product
                    </Typography>
                    <Grid
                      container
                      justifyContent="space-around"
                      direction="row"
                    >
                      <Grid
                        item
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className={classes.textField}
                      >
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Is product hazardous?
                          </FormLabel>
                          <RadioGroup
                            name="hazardous"
                            id="hazardous"
                            value={values.hazardous}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={{ marginLeft: '8px' }}
                          >
                            <FormControlLabel
                              value={'true'}
                              control={<Radio />}
                              label="True"
                            />
                            <FormControlLabel
                              value={'false'}
                              control={<Radio />}
                              label="False"
                            />
                          </RadioGroup>
                          <FormHelperText
                            error={
                              Boolean(errors.hazardous) && touched.hazardous
                            }
                          >
                            {errors.hazardous}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className={classes.textField}
                      >
                        <TextField
                          name="productName"
                          id="productName"
                          label="Product Name"
                          value={values.productName}
                          type="text"
                          variant="outlined"
                          helperText={
                            errors.productName && touched.productName
                              ? errors.productName
                              : 'Enter the product Name'
                          }
                          error={
                            errors.productName && touched.productName
                              ? true
                              : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
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
                          disabled={isSubmitting}
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
export default AddProductDialogForm;
