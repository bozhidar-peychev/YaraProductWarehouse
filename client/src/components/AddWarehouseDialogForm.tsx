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

import { useCreateWarehouseMutation } from '../graphql/generated/graphql';

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
  maxStockLevel: number;
  hazardous: string;
}

const AddWarehouseDialogForm: FC = () => {
  const [open, setOpen] = useState(false);
  const apolloClient = useApolloClient();
  const [createWarehouseMutation] = useCreateWarehouseMutation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const createWarehouse = async (
    { maxStockLevel, hazardous }: IFormValues,
    resetForm: Function
  ) => {
    await createWarehouseMutation({
      variables: { input: { maxStockLevel, hazardous: hazardous === 'true' } },
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
        Add Warehouse
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className={classes.root}>
            <Formik
              initialValues={{
                maxStockLevel: 0,
                hazardous: '',
              }}
              onSubmit={(values: IFormValues, actions) => {
                createWarehouse(values, actions.resetForm);
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 500);
              }}
              validationSchema={Yup.object().shape({
                maxStockLevel: Yup.string().required(
                  'Please set the max warehouse stock level!'
                ),
                hazardous: Yup.string().required(
                  'Please select the type of the warehouse!'
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
                      Add Warehouse
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
                            Is warehouse hazardous?
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
                          name="maxStockLevel"
                          id="maxStockLevel"
                          label="Warehouse Max Stock Level"
                          value={values.maxStockLevel}
                          type="number"
                          InputProps={{ inputProps: { min: 0 } }}
                          variant="outlined"
                          helperText={
                            errors.maxStockLevel && touched.maxStockLevel
                              ? errors.maxStockLevel
                              : 'Enter the warehouse max stock level'
                          }
                          error={
                            errors.maxStockLevel && touched.maxStockLevel
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
export default AddWarehouseDialogForm;
