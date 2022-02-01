import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

import Myheader from './section1/Myheader';
import Myhome from './section1/Myhome';
import Audience from './section2/Audience';

export default function Index() {
const classes = useStyles();
  return(
      <>
        <Grid container direction='row' gap={2} className={classes.root}>   
            <Myheader ></Myheader>
            <Myhome></Myhome>  
        </Grid> 

        <Grid container direction='row' gap={0} className={classes.section2} sx={{py:2,px:1}}>   
          <Audience></Audience>
        </Grid> 

      </>
  )
}
const useStyles = makeStyles({
    root:{
      justifyContent: 'center',
      position: 'relative',
      padding: '1rem',
    },
    section2:{
      background: 'black',
      color: 'white',
      border: '1px solid #B3AA78',
      borderRadius: '20px',
    }
  });