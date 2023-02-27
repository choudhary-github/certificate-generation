import { makeStyles } from "@mui/styles";
import image from "../assets/Certificate.png";

export default makeStyles(() => ({
  container: {
    // textAlign:'justify',
  },
  image: {
    display: "block",
    margin: "0 auto",
    marginTop: "3em",
    maxWidth: "85%",
    position: "relative",
  },
  name: {
    fontSize: "3.2rem !important",
    position: "absolute",
    top: 355,
    left: 470,
  },
  recognition: {
    position: "absolute",
    top: 445,
    left: 460,
    right: 350,
    fontFamily: "Poppins !important",
    fontWeight: "500 !important",
    fontSize: "1.1rem !important",
  },
  organisor: {
    position: "absolute",
    left: 467,
    top: 565,
    fontFamily: "Poppins !important",
    fontSize: "1.2rem !important",
    fontWeight: "600 !important",
  },
  logo: {
    position: "absolute",
    maxWidth: "80px",
    left: 780,
    top: 550,
  },
  qrCode: {
    position: "absolute",
    top: 550,
    left: 1050,
  },
}));
