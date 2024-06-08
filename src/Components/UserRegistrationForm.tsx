import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signupFormSchema } from "../FormSchema/signupFormSchema";


const UserRegistrationForm: React.FC = () => {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        jobTitle: '',
        workEmail: '',
        createPassword: '',
      }}
      validationSchema={signupFormSchema}
      onSubmit={(values) => {
        console.log(values);
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
                <Typography variant="h6" component="label" htmlFor="createPassword">
                  Create Password
                </Typography>
                <Field
                  as={TextField}
                  id="createPassword"
                  name="createPassword"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={touched.createPassword && !!errors.createPassword}
                  helperText={<ErrorMessage name="createPassword" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserRegistrationForm;
