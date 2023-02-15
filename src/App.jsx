import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Link,
  Container
} from "@mui/material";
import useStyles from "./styles";
import CertificatePage from "./components/CertificatePage";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      // padding: "inherit",
      background: trigger ? "aqua" : "",
      color: trigger ? "black" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
    },
  });
}

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const logo1 = "https://certificate.kartexa.com/images/logo-full-white.png";
  const logo2 = "https://certificate.kartexa.com/images/logo.png";

  return (
    <>
      <div className={classes.app}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <Box className={classes.box}>
                <Link href="https://certificate.kartexa.com/">{<img src={logo1} alt="Logo" width="220px" />}</Link>
                <Typography sx={{ ml: 3, fontSize: "0.8em", fontWeight: 500 }}>
                  <Link href="https://kartexa.com/pj/privacy-policy/" color={'#fff'} underline="hover">Privacy Policy</Link>
                </Typography>
              </Box>
              <Button href="https://kartexa.com/pj/contact/" className={classes.button} variant="outlined">
                CONTACT US
              </Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        <Box className={classes.middle} sx={{ my: 5 }}>
          <Typography
            sx={{ fontSize: "2.7em", letterSpacing: 0.5, fontWeight: "bold" }}
          >
            Steer your career to success!
          </Typography>
        </Box>
      </div>
      <Container xs={12}  p={6}>
        <CertificatePage/>
        
      </Container>
    </>
  );
}
