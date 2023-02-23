import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState, useRef } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useStyles from "./styles";
import Certificate from "../Certificate/Certificate";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { validationSchema } from "../../schema/validationSchema";
import { FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  internshipName: "",
  email: "",
  mobileNumber: "",
  organisationName: "",
  image: "",
  role: "",
  internshipOrganiser: "",
  endDate: null,
  startDate: null,
};

function forms() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const classes = useStyles();
  const navigate = useNavigate();
  const routeChange = (e) => {
    e.preventDefault()
    navigate("/certificate", { state: values, replace: true });
  };

  return (
    <Container display="flex" sx={{ mt: "4em" }}>
      <Typography
        sx={{ fontSize: "1.6rem", fontWeight: "500", color: "primary.main" }}
      >
        Enter your details:
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid
          display="flex"
          mt={1}
          container
          justifyContent={"space-between"}
          columnSpacing={5}
          rowSpacing={5}
        >
          <Grid item md={6} xs={12}>
            <TextField
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              required
              name="name"
              value={values.name}
              fullWidth
              label="Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={touched.internshipName && !!errors.internshipName}
              helperText={touched.internshipName && errors.internshipName}
              required
              name="internshipName"
              value={values.internshipName}
              fullWidth
              label="Internship Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              required
              name="email"
              value={values.email}
              fullWidth
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={touched.mobileNumber && !!errors.mobileNumber}
              helperText={touched.mobileNumber && errors.mobileNumber}
              required
              name="mobileNumber"
              value={values.mobileNumber}
              fullWidth
              label="Mobile Number"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={touched.organisationName && !!errors.organisationName}
              helperText={touched.organisationName && errors.organisationName}
              required
              name="organisationName"
              value={values.organisationName}
              fullWidth
              label="Organisation Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              className={classes.button}
              sx={{ backgroundColor: "white", color: "black" }}
              fullWidth
              variant="contained"
              component="label"
            >
              Upload an image
              <input
                name="file"
                onChange={(e) => {
                  setFieldValue(
                    "image",
                    URL.createObjectURL(e.target.files[0])
                  );
                }}
                hidden
                accept="image/*"
                type="file"
              />
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              error={touched.role && !!errors.role}
              required
              sx={{ width: "100%" }}
            >
              <InputLabel>Role</InputLabel>
              <Select
                label="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value={""}>
                  <em>Select</em>
                </MenuItem>
                <hr />
                <MenuItem value={"Frontend Developer"}>Frontend Developer</MenuItem>
                <hr />
                <MenuItem value={"Backend Developer"}>Backend Developer</MenuItem>
                <hr />
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
                <hr />
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
              </Select>
              {touched.role && (
                <FormHelperText>Please choose one.</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              error={
                touched.internshipOrganiser && !!errors.internshipOrganiser
              }
              helperText={
                touched.internshipOrganiser && errors.internshipOrganiser
              }
              required
              name="internshipOrganiser"
              value={values.internshipOrganiser}
              fullWidth
              label="Internship Organiser"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item md={6} xs={12}>
              <DesktopDatePicker
                disableFuture
                className={classes.date}
                label="Start Date"
                value={values.startDate}
                inputFormat="DD/MM/YYYY"
                onChange={(value) =>
                  setFieldValue("startDate", dayjs(value).format("DD-MMM-YYYY"))
                }
                renderInput={(params) => <TextField {...params} required />}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <DesktopDatePicker
                disableFuture
                value={values.endDate}
                className={classes.date}
                label="End Date"
                inputFormat="DD/MM/YYYY"
                onChange={(value) =>
                  setFieldValue("endDate", dayjs(value).format("DD-MMM-YYYY"))
                }
                renderInput={(params) => <TextField {...params} required />}
              />
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Box display="flex" justifyContent="center">
          <Button
            sx={{ m: "4em 0", p: ".7rem", letterSpacing: 1 }}
            disabled={!isValid}
            type="submit"
            variant="contained"
            onClick={routeChange}
          >
            View your Certificate
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default forms;
