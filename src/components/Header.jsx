import React from 'react';
import Typography from "@mui/material/Typography";
import {makeStyles} from '@material-ui/core/styles'
import { alpha } from '@material-ui/core/styles/colorManipulator';

function Header({page}){
const title = page === 'home' ? 'What game do you choose?' : 'Pick another game'

const useStyles=makeStyles(()=>({
  text:{
      color: alpha('#D2A17B', 0.7),
      textAlign: 'center',
      fontSize: [85, "!important"],
      lineHeight: .1
  }
  }));
  const classes=useStyles();

  return(
    <div>
<Typography className={classes.text} >
    <h1>GODMODE</h1>
    <h6>{title}</h6>
</Typography>
</div>
  )
}

export default Header;