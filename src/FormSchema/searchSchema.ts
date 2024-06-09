import * as Yup from "yup";

export const searchSchema = Yup.object({
    company: Yup.string().optional(),
    jobTitle: Yup.string().optional()
  });