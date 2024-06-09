import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Grid } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../services/authService';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginFormSchema } from '../FormSchema/loginFormSchema';
import { ToastContainer, toast } from 'react-toastify';

const LoginForm: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate('/')
  }
  if (!authContext) {
    throw new Error('AuthContext não está definido');
  }

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginFormSchema}
      onSubmit={(values) => {
        setIsLoading(true);
        login(values)
          .then((res: { access_token: string, firstName: string }) => {
            authContext.login(res.access_token, res.firstName)
            navigate('/home');
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          })
          .finally(() => setIsLoading(false));
      }}
    >
      {({ errors, touched }) => (
        <Form noValidate autoComplete="off">
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="email">
                  Email
                </Typography>
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={<ErrorMessage name="email" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="password">
                  Password
                </Typography>
                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={touched.password && !!errors.password}
                  helperText={<ErrorMessage name="password" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ position: 'relative' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading}
                    sx={{marginBottom: '12px'}}
                  >
                    {isLoading ? <CircularProgress size={24} /> : 'Login'}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={isLoading}
                    onClick={goToSignup}
                  >
                    Signup
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
