import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

export default function Myheader() {
  const Logotipo = require('../../assets/turminhadafe.jpeg')
  const edition = require('../../assets/edition.png')
  const book = require('../../assets/book.png')
  const classes = useStyles();
  return(
    <>
      <Grid item xs={12} sm={5} md={4} lg={4} xl={4} className={classes.itemGradient} >
        <img className={classes.vector} src={edition} alt="edicao 2022" />

        <h1 className={classes.myh1} >Projeto
          <b className={classes.destacaLaranja}> Turminha da
            <b className={classes.colorfe}>  FÉ </b>
          </b>
          <img src={book} alt="livro sagrado" className={classes.iconebook} />
        </h1>

        <img src={Logotipo} alt="logotipo" className={classes.imglogotipo} />

        <p className={classes.span} >Você e <strong>sua família</strong> são nossos convidados a participar desse projeto maravilhoso.</p>
      </Grid>
    </>
  ) 
}
const useStyles = makeStyles({
  itemGradient: {
    background: 'linear-gradient(180deg, rgba(255, 245, 0, 0.2) 0%, rgba(6, 155, 128, 0.2) 45.2%, rgba(0, 240, 255, 0.15) 81.21%)',
    border: '1px solid #00D1FF',
    borderRadius: '7%',
    padding: '1rem',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '1.7rem',
  },
  imglogotipo:{
    borderRadius: '50%',
  },
  destacaLaranja:{
    borderBottom: '3px solid #FF6B00',
  },
  vector:{
    display: 'block',
    margin: '-18px',
  },
  span: {
    fontSize: '1.3rem',
  },
  colorfe:{
    background: '#000',
    color: '#FFD706',
    borderRadius: '20%',
  },
  iconebook:{
    marginLeft: '0.5rem',
  },
  myh1: {
    lineHeight: '3rem',
    letterSpacing: '0.1rem',
  },
});

