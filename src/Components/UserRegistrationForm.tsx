import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const UserRegistrationForm: React.FC = () => {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="label" htmlFor="firstName">
            First Name
          </Typography>
          <TextField
            id="firstName"
            name="firstName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" component="label" htmlFor="lastName">
            Last Name
          </Typography>
          <TextField
            id="lastName"
            name="lastName"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="label" htmlFor="company">
            Company
          </Typography>
          <TextField id="company" name="company" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="label" htmlFor="jobTitle">
            Job Title
          </Typography>
          <TextField
            id="jobTitle"
            name="jobTitle"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="label" htmlFor="workEmail">
            Work Email
          </Typography>
          <TextField
            id="workEmail"
            name="workEmail"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="label" htmlFor="createPassword">
            Create Password
          </Typography>
          <TextField
            id="createPassword"
            name="createPassword"
            type="password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserRegistrationForm;
