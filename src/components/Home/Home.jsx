import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import useStyles from "./style";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Route, useNavigate } from "react-router-dom";

function Home() {
  const classes = useStyles();
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "form";
    navigate(path);
  };
  return (
    <>
      <Box className={classes.middle}>
        <Typography
          sx={{
            fontSize: "2.7em",
            letterSpacing: 0.5,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Steer your career to success!
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 8,
          textAlign: "center",
          letterSpacing: 0.5,

          color: "primary.main",
          height: "20vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Make your Certificate
        </Typography>
        <IconButton
          onClick={routeChange}
        >
          <ArrowForwardOutlinedIcon
            sx={{ color: "primary.main", fontSize: "2.2rem" }}
          />
        </IconButton>{" "}
      </Box>
    </>
  );
}

export default Home;
