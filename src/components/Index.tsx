import React from 'react';
import { Grid } from '@mui/material';
import Myheader from './Myheader';
import Myhome from './Myhome';
import { makeStyles } from '@material-ui/styles';

export default function Index() {
const classes = useStyles();
  return(
      <>
        <Grid container direction='row' gap={2} className={classes.root}>   
            <Myheader ></Myheader>
            <Myhome></Myhome>  
        </Grid> 
      </>
  )
}
const useStyles = makeStyles({
    root:{
      justifyContent:'center',
      position: 'relative',
      padding: '1rem',
    },
  });