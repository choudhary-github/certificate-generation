import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container:{
    border:'2px solid black',
    display:'flex',
  },
  box:{
    display:'flex',
    margin:'25px 50px 0px',
  },
  list:{
    // margin:'0 50px',
    display:'flex',
    justifyContent:'space-around',
    padding:10,
    alignItems:'center'

  },
  details:{
    width:'50%',
  },
  buttons:{
    display:'flex',
    justifyContent:'center',
    
  },
  detailsBox:{
    justifyContent:'center',
    // border:'2px solid red',
    width:'80%',
    margin:'0 auto !important',
    margin:"20px 50px 0px !important"
  }

}));
