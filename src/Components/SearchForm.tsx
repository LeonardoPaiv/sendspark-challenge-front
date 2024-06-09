import { Box, TextField, Button } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { searchSchema } from "../FormSchema/searchSchema";
import { IUserSearchDTO } from "../models/IUserSearchDTO";

function SearchForm({
  searchValues,
  submit
}: {
  searchValues: IUserSearchDTO;
  submit: (values: IUserSearchDTO) => void
}) {
  return (
    <Formik
      initialValues={searchValues}
      validationSchema={searchSchema}
      onSubmit={submit}
    >
      {({ errors, touched }) => (
        <Form>
          <Box display="flex" alignItems="center">
            <Field
              as={TextField}
              name="company"
              label="Company"
              margin="normal"
              fullWidth
              error={touched.company && !!errors.company}
              helperText={touched.company && errors.company}
              sx={{ marginRight: 2 }}
            />
            <Field
              as={TextField}
              name="jobTitle"
              label="Job Title"
              margin="normal"
              fullWidth
              error={touched.jobTitle && !!errors.jobTitle}
              helperText={touched.jobTitle && errors.jobTitle}
              sx={{ marginRight: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
