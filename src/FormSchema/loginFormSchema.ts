import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .matches(/^[A-Za-z0-9._%+-]+@sendspark\.com$/, "Email must belong to the domain sendspark.com")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .max(120, "Must be 120 characters or less")
      .required("Required"),
  });