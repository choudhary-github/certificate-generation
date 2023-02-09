import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useStyles from "./styles";
import Certificate from "../Certificate/Certificate";

function forms() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState("");

  const [show, setShow] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Grid
        mt={1}
        container
        justifyContent={"space-between"}
        columnSpacing={5}
        rowSpacing={5}
      >
        <Grid item md={6} xs={12}>
          <TextField
            value={name}
            required
            fullWidth
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="InternShip Name" />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="Email" />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="Contact Number " />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="Organisation" />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="Mentor" />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <InputLabel>Role</InputLabel>
            <Select
              required
              labelId=""
              id=""
              value={""}
              onChange={() => ({})}
              label="Role"
            >
              <MenuItem>One</MenuItem>
              <hr />
              <MenuItem>Two</MenuItem>
              <hr />
              <MenuItem>Three</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField required fullWidth label="InternShip Organizer" />
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item md={6} xs={12}>
            <DesktopDatePicker
              className={classes.date}
              label="Start Date"
              value={startDate}
              inputFormat="DD/MM/YYYY"
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <DesktopDatePicker
              value={endDate}
              className={classes.date}
              label="End Date"
              inputFormat="DD/MM/YYYY"
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
      <Button
        onClick={() => {
          setShow(!show), console.log({ show });
        }}
        variant="contained"
      >
        View your Certificate
      </Button>
      {show && <Certificate name={name} />}
    </>
  );
}

export default forms;
