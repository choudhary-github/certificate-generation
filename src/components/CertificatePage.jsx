import React, { useState } from "react";
import {
  Typography,
  Container,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import useStyles from "./styles";
import Forms from "./Forms/Forms";
import Certificate from "./Certificate/Certificate";

function certificatePage() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "2.3rem",
          mt: "2em",
          mb: "1.5em",
          fontWeight: "500",
          color: "primary.main",
        }}
      >
        Make Your Certificate
      </Typography>
      <Container className={classes.container}>
        <Typography sx={{ fontSize: "1.5rem", color: "primary.main" }}>
          {" "}
          Enter Your Details
        </Typography>
        <Forms />
      </Container>
    </div>
  );
}

export default certificatePage;
