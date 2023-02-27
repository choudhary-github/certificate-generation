import React, { useRef } from "react";
import "./styles.css";
import {
  Container,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import logo from "../../assets/logo.png";
import { useReactToPrint } from "react-to-print";

const theme = createTheme({
  typography: {
    fontFamily: ["Dancing Script", "cursive", "Poppins", "sans-serif"].join(),
  },
});
function Certificate1() {
  const printRef = useRef();
  const location = useLocation();
  const {
    name,
    organisationName,
    internshipOrganiser,
    internshipName,
    startDate,
    endDate,
  } = location.state;
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <>
      <div ref={printRef} className="app">
        <ThemeProvider theme={theme}>
          <Container sx={{width:'600px'}}>
            <Typography
              sx={{ fontSize: "3.1rem", marginTop: "285px" }}
              // className={classes.name}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: ".9rem",
                // textAlign: "center",
              }}
            >
              For completing the {internshipName} internship program as{" "}
              {internshipName} in {organisationName} from
              {" " + startDate} to {endDate}.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                // alignSelf:'flex-end',
                justifyContent: "space-between",
                marginTop: '70px',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  // marginTop:9
                }}
              >
                {internshipOrganiser}
              </Typography>
              <img
                style={{
                  // marginTop:10,
                  maxWidth: "80px",
                }}
                src={logo}
                alt="logo"
                
              />
              <QRCodeSVG value="https://kartexa.com" size={70} />
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <Box  p="1em" direction={"row"} display='flex' justifyContent='center' >
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
          onClick={handlePrint}
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
    </>
  );
}

export default Certificate1;
