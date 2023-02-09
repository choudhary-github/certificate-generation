import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  app: {
    boxSizing:'border-box' ,
    color: "white",
    padding: "0 40px !important",
    height: "92vh",
    background:
      "linear-gradient(to right,#ff6d3e,#fe4350)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  },
  appbar: {
    background: "inherit",
    padding: "inherit",
    paddingTop: ".9em !important",
    paddingBottom: ".9em !important",
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
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:'75%',
  },
}));
