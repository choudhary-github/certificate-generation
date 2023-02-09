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
      <Typography sx={{ textAlign: "center" }}>
        Make Your Certificate
      </Typography>
      <Container className={classes.container}>
        <Typography> Enter Your Details</Typography>
        <Forms />
        
      </Container>
    </div>
  );
}

export default certificatePage;
