import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import CardMedia from '@material-ui/core/CardMedia';
import '../assets/css/Programs.css'
import program1 from '../assets/images/program1.jpeg';
import program2 from '../assets/images/program2.jpeg';
import program3 from '../assets/images/program3.jpeg';
import program4 from '../assets/images/program4.jpeg';
import program5 from '../assets/images/program5.jpeg';
import program6 from '../assets/images/program6.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  boxsection: {
    padding: theme.spacing(5),
    textAlign: 'center',
    fontSize: 'calc(6px + 2vmin)',
    color: '#213472',
    textDecoration: 'solid underline 1px #bac1d6',
    textUnderlineOffset: '10px',
  },
  boxheader: {
    padding: theme.spacing(2),
    paddingBottom: '40px',
    textAlign: 'center',
    fontSize: 'min(max(1.7rem, 4vw), 48px)',
    color: '#213472',
    fontWeight: '800',
  },
  boxcard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  boxtitle: {
    padding: theme.spacing(4),
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontSize: 'calc(8px + 2vmin)',
    color: '#213472',
    textDecoration: 'solid underline 1px #bac1d6',
    textUnderlineOffset: '14px',
  },
  boxtext: {
    padding: 'calc(100px + 1vmin)',
    textAlign: 'center',
    fontSize: 'calc(6px + 1vmin)',
    color: '#213472;',
    fontWeight: '300',
    width: '100%',
  },
  boximage: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '698px',
  },
}));




function ProgramPage() {
  const classes = useStyles();

  return (
    <div >
    <MainContainer>  
      <Grid container>
        <Grid item xs={12} >
          <BoxSection className={classes.boxsection} >Our Programs </BoxSection>
          <BoxHeader className={classes.boxheader} >What Your Children Will Learn <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
        </Grid>
        <Grid item sm={12} md={12} >
          <Box className={classes.boxcard}>
          <BoxText >
            <p>From curriculum to teachers, our approach to early education inspires a love of learning. Whether they’re building a skyscraper, cooking an imaginary feast, or healing a teddy bear’s runny nose, your child will build confidence for life having fun with friends their age in our safe and supportive classrooms. They’ll find teachers who believe in them and give them the freedom to be themselves, try something new, and make new friends.</p>
            <p>Right now, your child’s brain is growing faster than it ever will in their whole life, making amazing connections every second. That’s why every learning moment counts! Our classrooms are designed around your child’s unique needs, and our curriculum is built from the latest research in early childhood development to help little minds grow. </p>
          </BoxText>
          </Box>
        </Grid>

        <Grid container >
                <Grid item xs={12}>
                    <br/>
                </Grid>
               <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                   <CardMedia className="programcard border-0">
                        <img src={program1} className="programimage" alt=''/>
                    </CardMedia>   
                    <div className="cardheader">Writing</div>
                    <div className="carddesc">Children will learn the basic of writing like lines, curve, letter, numbers and many more.</div>
               </Grid>
               <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                    <CardMedia className="programcard border-0">
                        <img src={program2} className="programimage" alt=''/>
                    </CardMedia>
                    <div className="cardheader">Painting & Drawing</div>
                    <div className="carddesc">Children will experience how to express their creativity upon drawing and painting.</div>
               </Grid>
               <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                    <CardMedia className="programcard border-0">
                        <img src={program3} className="programimage" alt=''/>
                   </CardMedia>
                   <div className="cardheader">Phonetic Sounds</div>
                   <div className="carddesc">Children will learn the alphabet and experience how to say and pronounce syllables.</div>
                </Grid>
            <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                    <CardMedia className="programcard border-0">
                        <img src={program4} className="programimage" alt=''/>
                   </CardMedia>  
                   <div className="cardheader">Counting Numbers</div>
                   <div className="carddesc">Children will learn how to count through fun activities.</div>
               </Grid>
               <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                    <CardMedia className="programcard border-0">
                        <img src={program5} className="programimage" alt=''/>
                        
                   </CardMedia>
                   <div className="cardheader">Handicraft Activity</div>
                   <div className="carddesc">Children will enjoy and express their artistic side on doing some handicraft activity.</div>
               </Grid>
               <Grid item sm={6} lg={4} className="programgrid wobble-hor-top">
                    <CardMedia className="programcard border-0">
                        <img src={program6} className="programimage" alt=''/>
                        
                   </CardMedia>
                   <div className="cardheader">Playtime</div>
                   <div className="carddesc">Children will develop social skills through playtime with other students.</div>
               </Grid>
           </Grid>
      </Grid>
    </MainContainer>
    </div>
  );
}
export default ProgramPage;

export const MainContainer= styled.div`
// background: yellow;
padding: 80px 120px;
@media (max-width: 1024px) {
    text-align: center;
    font-size: calc(3px + 1vmin);
}
@media (max-width: 768px) {
  text-align: center;
  padding: 0;
}
`;

export const BoxSection = styled.div`
@media screen and (max-width: 768px) {
  margin-top: 20px;
}
`;

export const BoxHeader= styled.div`
font-family: "Lilita One", sans-serif;
text-transform: uppercase;
letter-spacing: 3px;
// text-decoration: underline;
// text-decoration-thickness: 1px;
// text-underline-offset: 10px;
@media (max-width: 1024px) {
  
}
@media (max-width: 768px) {
  text-align: center;
  margin-top: -10px;
  font-size: 20px;
}
@media (max-width: 408px) {
  text-align: center;
  padding-top: 50px;
  font-size: 10px;
}
`;

export const BoxText= styled.div`
padding: 0px calc(50px + 1vmin);
text-align: center;
font-size: calc(7px + 1vmin);
color: #213472;
fontWeight: 300;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 1100px) {
  text-align: center;
  font-size: calc(5px + 1vmin);
}
@media (max-width: 1024px) {
    text-align: center;
    font-size: calc(6px + 1vmin);
}
@media (max-width: 768px) {
  text-align: center;
  padding: 0 40px;
}
`;

export const BoxImage= styled.div`
padding: 30px 30px;
display: flex;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
@media (max-width: 960px) {
    width: auto;
    height: auto;
}
@media (max-width: 768px) {
  width: auto;
  height: auto;
  padding-top: 50px;
}
`;