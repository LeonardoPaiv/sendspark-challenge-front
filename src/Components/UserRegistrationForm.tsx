import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupFormSchema } from "../FormSchema/signupFormSchema";
import { signup } from "../services/authService";
import { IUserRegisterDTO } from "../models/IUserRegisterDTO";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserRegistrationForm: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error("AuthContext não está definido");
  }

  const { login } = authContext;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        workEmail: '',
        password: '',
      }}
      validationSchema={signupFormSchema}
      onSubmit={(values: IUserRegisterDTO) => {
        setIsLoading(true);
        signup(values)
          .then((res: { access_token: string }) => {
            login(res.access_token);
            navigate('home');
          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => setIsLoading(false));
      }}
    >
      {({ errors, touched }) => (
        <Form noValidate autoComplete="off">
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="label" htmlFor="firstName">
                  First Name
                </Typography>
                <Field
                  as={TextField}
                  id="firstName"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  error={touched.firstName && !!errors.firstName}
                  helperText={<ErrorMessage name="firstName" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="label" htmlFor="lastName">
                  Last Name
                </Typography>
                <Field
                  as={TextField}
                  id="lastName"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  error={touched.lastName && !!errors.lastName}
                  helperText={<ErrorMessage name="lastName" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="company">
                  Company
                </Typography>
                <Field
                  as={TextField}
                  id="company"
                  name="company"
                  variant="outlined"
                  fullWidth
                  error={touched.company && !!errors.company}
                  helperText={<ErrorMessage name="company" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="jobTitle">
                  Job Title
                </Typography>
                <Field
                  as={TextField}
                  id="jobTitle"
                  name="jobTitle"
                  variant="outlined"
                  fullWidth
                  error={touched.jobTitle && !!errors.jobTitle}
                  helperText={<ErrorMessage name="jobTitle" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="workEmail">
                  Work Email
                </Typography>
                <Field
                  as={TextField}
                  id="workEmail"
                  name="workEmail"
                  variant="outlined"
                  fullWidth
                  error={touched.workEmail && !!errors.workEmail}
                  helperText={<ErrorMessage name="workEmail" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="label" htmlFor="password">
                  Create Password
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
                  >
                    Continue
                  </Button>
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserRegistrationForm;
