import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

// Usado na section 2 - Audience
export default function CardBox() {
  const personaIcon = require('../../assets/personaIcon.png');
  const familyIcon = require('../../assets/familyIcon.png');
  const classes = useStyles();
    return (
        <>
         <Grid item xs={5.5} sm={5} md={4} lg={4} xl={4} className={classes.box}>
            <img src={personaIcon} alt="Icone de Crianças" />
            <h1 className={classes.myh1}> Para Quem Tem </h1>
            <p className={classes.myp1}> Crianças entre 5 a 11 Anos de Idade </p>
        </Grid>

        <Grid item xs={5.5} sm={5} md={4} lg={4} xl={4} className={classes.box} >
            
            <h1 className={classes.myh1black} > Para Quem Quer </h1>
            <img src={familyIcon} alt="Família em Unidade" />
            <p className={classes.myp1}> Passar Tempo de 
                Qualidade em Família 
                através do <b>Plano Tático</b>  
            </p>
        </Grid>
        </>
    )
}

const useStyles = makeStyles({
  box: {
    background: 'linear-gradient(180deg, #F7DE59 19.27%, rgba(6, 155, 128, 0.5) 45.2%, rgba(0, 240, 255, 0.04) 81.21%, rgba(48, 249, 255, 0.05) 83.85%)',
    border: '1px solid #B3AA78',
    borderRadius: '20px',
    padding: '0.3rem',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    alignSelf: 'center',
    //margin: '1.7rem',
  },
  myh1:{
    color: 'yellow',
    fontSize: '1.2rem',
  },
  myh1black:{
    fontSize: '1.1rem',
    fontWeight: 900,
    color: 'black',
  },
  myp1:{
    lineHeight: '1.5rem',
    fontSize: '1rem',
  },
  myp2:{
    fontSize: '0.9rem',
    letterSpacing: '0.1rem',
    lineHeight: '1.3rem',
  }

});