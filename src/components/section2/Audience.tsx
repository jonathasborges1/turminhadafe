import React from 'react';
import { Grid } from '@mui/material';
import CardBox from './CardBox';
import { makeStyles } from '@material-ui/styles';

// section 2
export default function Audience() {
   const classes = useStyles();
   return (
      <>
         <Grid item xs={12} sm={8} md={7} lg={7} xl={4} className={classes.box}  >
         
            <h1> Para Quem Serve</h1>
            <h3> O Nosso Conteúdo </h3>
            <h5 className={classes.myh5} > Turminha da Fé ?   </h5>

         </Grid>

         <Grid item xs={12} sm={8} md={7} lg={7} xl={4} className={classes.box}  >
            <Grid container justifyContent="space-around" gap={1} sx={{my:4}} >
               <CardBox></CardBox>
            </Grid>
         </Grid>
      </>
   )
}

const useStyles = makeStyles({
  box: {
    // background: 'linear-gradient(180deg, #F7DE59 19.27%, rgba(6, 155, 128, 0.5) 45.2%, rgba(0, 240, 255, 0.04) 81.21%, rgba(48, 249, 255, 0.05) 83.85%)',
    //  border: '1px solid #B3AA78',
    //  borderRadius: '20px',
    lineHeight: '0.7rem',
    //padding: '1rem',
    fontSize: '1.25rem',
    
    stroke:  "black",
    width: "1",
    fill: "white",
    color:"#ffffff",
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //webkitTextStroke: '2px #B3A078',
    margin: '1rem 0rem 1rem 0rem',
  },
  myh1:{
    color: 'yellow',
  },
  myh5:{
     lineHeight: '1.5rem',
     borderBottom: '2px solid yellow',
     borderRadius: '20px',
     margin: '0rem 5rem 0rem 5rem',
  },
  myp:{
   //borderBottom: '2px solid yellow',
  }
});