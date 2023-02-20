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
  useMediaQuery,
  IconButton,
  Drawer,
  MenuItem,
} from "@mui/material";
import {} from "react-router-dom";
import useStyles from "./style";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

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
      // background: trigger ? "aqua" : "",
      // color: trigger ? "black" : "white",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
    },
  });
}

function ElevateAppBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const isDown = useMediaQuery("(max-width:900px)");
  const logo1 = "https://certificate.kartexa.com/images/logo-full-white.png";
  const logo2 = "https://certificate.kartexa.com/images/logo.png";
  const activeStyle = {
    // borderBottom: "2px solid black",
  };
  function toogleDrawer() {
    setOpenDrawer((value) => !value);
    console.log(openDrawer);
  }

  return (
    <div className={classes.app}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Box className={classes.box}>
              <Link href="https://certificate.kartexa.com/">
                {<img src={logo1} alt="Logo" width="220px" />}
              </Link>
              <Typography sx={{ ml: 3, fontSize: "0.7em", fontWeight: 500 }}>
                <Link
                  href="https://kartexa.com/pj/privacy-policy/"
                  color={"#fff"}
                  underline="hover"
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Box>

            {isDown ? (
              <IconButton onClick={toogleDrawer}>
                <MenuRoundedIcon
                  sx={{ fontSize: "1.7rem" }}
                  className={classes.menuBtn}
                />
              </IconButton>
            ) : (
              <Box
                width={"45%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Box
                  flexGrow={1}
                  display={"flex"}
                  justifyContent="space-around"
                >
                  <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className={classes.navlink}
                  >
                    {" "}
                    Home
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="form"
                    className={classes.navlink}
                  >
                    Details
                  </NavLink>
                  <NavLink
                    onClick={() => {}}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className={classes.navlink}
                    to="#"
                  >
                    {" "}
                    Certificate{" "}
                  </NavLink>
                </Box>
                <Button
                  href="https://kartexa.com/pj/contact/"
                  className={classes.button}
                  variant="outlined"
                >
                  CONTACT US
                </Button>
              </Box>
            )}
            {isDown ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={openDrawer}
                onClose={toogleDrawer}
                classes={{ paper: classes.drawerPaper }}
              >
                <MenuItem >
                  <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className={classes.navlink}
                  >
                    {" "}
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    to="form"
                    className={classes.navlink}
                  >
                    Details
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className={classes.navlink}
                    to="#"
                  >
                    {" "}
                    Certificate{" "}
                  </NavLink>
                </MenuItem>
              </Drawer>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}

export default ElevateAppBar;
