import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import useStyles from "./style";
import image from "../../assets/Text Logo.png";

const theme = createTheme({
  typography: {
    fontFamily: ["Quattrocento", "serif"].join(),
  },
  palette: {
    primary: {
      main: "#62001e",
    },
  },
});

function Certificate(props) {
  const { name, organisation, mentor, organisedBy } = props;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ color: "primary.main" }} className={classes.container}>
        <Typography
          sx={{
            fontSize: "2.7rem",
          }}
          className={classes.head}
        >
          Certificate of Completion
        </Typography>
        <Typography
          sx={{ mb: "3em", fontSize: "1.15rem", fontFamily: "Poppins" }}
        >
          This hereby recognizes
        </Typography>
        <Typography
          sx={{ mb: ".9em", fontSize: "3.7rem" }}
          className={classes.text}
        >
          {name || "Name"}
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", mb: 10, fontSize: "1.15rem" }}>
          for successfully completing the internship in{" "}
          {organisation || "Organisation"} for 2 months.
        </Typography>
        <Box className={classes.box}>
          <Stack direction={"column"}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
              {mentor || "Mentor Name"}
            </Typography>
            <Typography className={classes.bold}>Mentor by</Typography>
          </Stack>
          <img className={classes.logo} src={image} alt="" />
          <Stack direction={"column"}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
              {organisedBy || "Organisor Name"}
            </Typography>
            <Typography className={classes.bold}>Organise by</Typography>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Certificate;
