import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  app: {
    boxSizing: "border-box",
    color: "white",
    background:
      "linear-gradient(to right,#ff6d3e,#fe4350)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  appbar: {
    background: "inherit",
    padding: "inherit",
    paddingTop: ".7em !important",
    paddingBottom: ".7em !important",
  },
  button: {
    color: "white !important",
    border: "2px solid rgba(255,255,255,.5) !important",
    borderRadius: "50px !important",
    padding: ".8em 2.5em !important",
    fontSize: ".75em !important",
    fontWeight: "bold !important",
    "&:hover": {
      background: "white !important",
      border: "2px solid white !important",
      color: "#e65245 !important",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      // marginLeft: 0,
      // flexWrap: "wrap",
      // backgroundColor: "white",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
  },

  navlink: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "1rem",
    transitionTimingFunction: "ease",
    transitionDuration: "100ms",
    "&:hover": {
      fontSize: "1.2rem",
      // borderBottom: "2px solid black",
      //       background: rgb(131,58,180),
      // background: `linear-gradient(10deg, rgba(131,58,180,1) 0%, rgba(253,149,29,0.8801645658263305) 68%, rgba(252,176,69,1) 100%)`
    },
  },
  menuBtn:{
    // fontSize:'large',
    color:"white"
  },
  drawerPaper:{
    paddingTop:'2rem',
    color:'#fe4350 !important',
    width:200,
    // background:'transparent !important',
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    background:
      "linear-gradient(to right,#ff6d3e,#fe4350)"
  }
}));
