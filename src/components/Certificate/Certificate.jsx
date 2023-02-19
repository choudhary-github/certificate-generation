import {
  Box,
  Container,
  Typography,
  Divider,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import React from "react";
import useStyles from "./style";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

function Certificate(props) {
  const {
    image,
    name,
    organisation,
    organisedBy,
    internshipName,
    role,
    startDate,
    endDate,
  } = props;
  const firstName =  name.split(' ').slice(0, 1).join(' ')
  const randomNum = Math.floor(Math.random() * 9000000000) + 1000000000;
  const classes = useStyles()

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <Container className={classes.container} maxWidth="md">
          <Typography fontWeight={400} fontSize={"2.7rem"} color={"#3c3b7a"}>
            Welcome{" "}
            <Typography display="inline-block" fontSize="1.8rem">
              {firstName}
            </Typography>
          </Typography>
          <Box className={classes.box}>
            <img width="110px" height="120px" src={image} alt="image" />
            <Box sx={{ ml: 8 }}>
              <Typography
                fontSize={"1.7rem"}
                fontWeight={"bold"}
                color="#00dba1"
              >
                Certificate Number{" "}
                <Typography
                  display="inline-block"
                  fontSize="1.7rem"
                  color="#5e1c1c"
                >
                  :
                </Typography>{" "}
                <Typography
                  fontSize={"1.6rem"}
                  display="inline-block"
                  color="#e84504"
                >
                  {randomNum}
                </Typography>
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#ff6542",
                  borderRadius: "10px",
                  p: "8px 12px",
                  width: "78%",
                }}
              >
                <Typography sx={{ fontWeight: "600", letterSpacing: "0" }}>
                  Remarks
                </Typography>
                <Typography
                  sx={{
                    lineHeight: 1,
                    color: "#fff",
                    fontWeight: "300",
                    fontSize: "14px",
                    maxWidth: "90%",
                  }}
                >
                  {firstName || "name"} is an outstanding and a very creative
                  young man who is willing to work hard.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.detailsBox} margin="20px 10px">
            <Box className={classes.list}>
              <Typography
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
                color={"#902525"}
              >
                Name
              </Typography>
              <Typography
                sx={{ color: "primary.main", textTransform: "uppercase" }}
                className={classes.details}
              >
                {name}
              </Typography>
            </Box>
            <Divider />
            <Box className={classes.list}>
              <Typography
                color={"#902525"}
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
              >
                Role
              </Typography>
              <Typography
                sx={{ color: "primary.main" }}
                className={classes.details}
              >
                {role}
              </Typography>
            </Box>
            <Divider />

            <Box className={classes.list}>
              <Typography
                color={"#902525"}
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
              >
                Organisation
              </Typography>
              <Typography
                sx={{ color: "primary.main" }}
                className={classes.details}
              >
                {organisation}
              </Typography>
            </Box>
            <Divider />

            <Box className={classes.list}>
              <Typography
                color={"#902525"}
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
              >
                Organized By
              </Typography>
              <Typography
                sx={{ color: "primary.main" }}
                className={classes.details}
              >
                {organisedBy}
              </Typography>
            </Box>
            <Divider />

            <Box className={classes.list}>
              <Typography
                color={"#902525"}
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
              >
                Internship Name
              </Typography>
              <Typography
                sx={{ color: "primary.main" }}
                className={classes.details}
              >
                {internshipName}
              </Typography>
            </Box>
            <Divider />

            <Box className={classes.list}>
              <Typography
                color={"#902525"}
                mr="7em"
                fontWeight={"bold"}
                className={classes.details}
              >
                Internship Date
              </Typography>
              <Typography
                sx={{ color: "primary.main" }}
                className={classes.details}
              >
                {startDate} to {endDate}
              </Typography>
            </Box>
          </Box>
          <Box p="1em" direction={"row"} className={classes.buttons}>
            <Button
              sx={{
                width: "10em",
                fontWeight: "400",
                backgroundColor: "#ff6343",
                fontSize: 15,
                letterSpacing: 1,
                padding: ".8em 1.4em",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "success.light",
                },
              }}
              variant="contained"
            >
              Download
            </Button>
            <Button
              sx={{
                width: "10em",
                fontWeight: "400",
                backgroundColor: "#00dba1",
                marginLeft: 5,
                fontSize: 15,
                letterSpacing: 1,
                padding: ".8em 1.4em",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "success.light",
                },
              }}
              variant="contained"
            >
              Print
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Certificate;
