import React from 'react';
import { Button, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@mui/material/LinearProgress';

// section 1
export default function Myhome() {
    const king = require('../../assets/king.png')
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={5} className={classes.itemGradient} >
                <h1>Fortaleça a Fé do seu filho e da sua familía através de nosso rei !
                    <b className={classes.destaquejesuscristo}>Jesus Cristo</b>.
                    <img src={king} alt="coroa do rei" />
                </h1>

                <Grid container justifyContent="space-around" gap={2}  sx={{my:8}} >
                    <Grid item lg={6} >

                        <div className={classes.subheadlineout} >
                            <span className={classes.subheadlinein} >
                                <b> Material Bíblico Infantil </b>
                                inspirado na fonte eterna, nossa querida bíblia sagrada que contem
                                <b> mais de 30.000 versículos</b>,
                                diretamente para seu filho criar conexão com Deus. </span>
                        </div>

                    </Grid>

                    <Grid item lg={5} >
                        {/* <img src={arrow} alt="seta para baixo" style={{ margin: '0rem 0rem 2.0rem 0rem' }} /> */}
                        {/* <a className={classes.button}  href="https://google.com">Quero Participar do Projeto</a> */}
                        <div className='mb-6'>
                            <div className="arrow" >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <Button
                            sx={{
                                background: '#8FFF00',
                                border: '1px solid black',
                                borderRadius: '20px',
                                padding: '0.7rem',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'black',
                                marginTop: '1rem',
                            }}  href="https://google.com">Quero Participar do Projeto</Button>
                            <LinearProgress />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}
const useStyles = makeStyles({
    root: {
        position: 'relative',
        padding: '1rem',
        margin: '0rem 0.5rem 0.5rem 0rem',
        fontSize: '0.9rem',
    },
    itemGradient: {
        background: 'linear-gradient(180deg, rgba(255, 245, 0, 0.2) 0%, rgba(6, 155, 128, 0.2) 45.2%, rgba(0, 240, 255, 0.15) 81.21%)',
        border: '1px solid #00D1FF',
        borderRadius: '7%',
        padding: '1rem',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    destaquejesuscristo: {
        color: 'yellow',
        backgroundColor: '#000',
        border: '1px solid yellow',
        borderRadius: '20%',
    },
    subheadlineout: {
        borderLeft: '5px solid #ffe500',
        textAlign: 'justify',
        padding: '0rem 0rem 0rem 0.7rem',
        marginTop: '1rem',
    },
    subheadlinein: {
        lineHeight: '1.4rem',
    },
});
