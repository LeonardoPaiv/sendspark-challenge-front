import * as Yup from "yup";

export const signupFormSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(120, "Must be 120 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(120, "Must be 120 characters or less")
      .required("Required"),
    company: Yup.string()
      .max(120, "Must be 120 characters or less")
      .required("Required"),
    jobTitle: Yup.string()
      .max(120, "Must be 120 characters or less"),
    workEmail: Yup.string()
      .email("Invalid email address")
      .matches(/^[A-Za-z0-9._%+-]+@sendspark\.com$/, "Email must belong to the domain sendspark.com")
      .required("Required"),
    createPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .max(120, "Must be 120 characters or less")
      .required("Required"),
  });