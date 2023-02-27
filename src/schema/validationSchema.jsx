import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().min(2).max(30).required("Name is required."),
  internshipName: Yup.string().required("Internship Name is required."),
  email: Yup.string().email().required("Email is required."),
  mobileNumber: Yup.string()
    .min(10)
    .max(10)
    .required("Your Number is mandatory."),
  organisationName: Yup.string().required("Organisation name is required."),
  role: Yup.string().required("Please choose one."),
  internshipOrganiser: Yup.string().required("Name is required."),
  startDate: Yup.date().required("Please select your joining date."),
  endDate: Yup.date().required("Please select your completing date."),
});
