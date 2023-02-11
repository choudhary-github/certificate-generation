import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container:{
    border:'2px solid black',
    textAlign:'center',
    padding:50,
  },
  text:{
    textTransform:'uppercase',
  },
  box:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:'1.6em'
  },
  logo:{
    width:200
  },
  head:{
    marginBottom:'1em !important'
  },
  bold:{
    fontFamily:'Poppins !important'
  }
}));
