import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import about1 from '../assets/images/about1.png';
import about2 from '../assets/images/about2.png';

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
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '698px',
  },
}));



function AboutPage() {
  const classes = useStyles();

  return (
    <div >
    <Container>  
      <Grid container>
        <Grid item xs={12} style={{order:'1'}} >
          <BoxSection className={classes.boxsection} >About Us </BoxSection>
          <BoxHeader className={classes.boxheader} >Your Child is in Great Hands <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
        </Grid>
        <Grid container style={{order:'2'}}>
        <Grid item sm={12} md={6} style={{order:'1'}} >
          <BoxImage >
            <img src={about1} alt='' />
          </BoxImage>
        </Grid>
        <Grid item sm={12} md={6} style={{order:'2'}}>
          <Box className={classes.boxcard}>
          <Box className={classes.boxtitle} >Philosophy</Box>
          <BoxText >
            <p>We believe that children and families are central to everything we do. We believe in understanding and responding to the needs of our community. We believe in collaboration, support for each other and mutual respect.</p>
            <p>We recognize the importance of the family and the community in child development. As a family-centred child care organization, we work to strengthen the relationships among children, families and communities. We understand that culture, diversity, community and public policy affect child and family development.</p>
          </BoxText>
          </Box>
        </Grid>
        </Grid>
        <Grid container style={{order:'3'}}>
        <Grid item sm={12} md={6} >
          <Box className={classes.boxcard}>
          <Box className={classes.boxtitle} >Health & Safety</Box>
          <BoxText >
            <p>We know what it takes to keep children safe, so you can feel sound. It starts with paying attention to every detail—big and small. Every day at our center, you can be confident that your child is in the very best hands.</p>
            <p>We hire teachers who care. They do more than teach—they nurture every child, paying attention to everyone’s unique needs. At Little Rainbows DayCare, your child will find teachers who believe in them, who give them the confidence to try new things and make new friends. </p>
          </BoxText>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} >
          <div >       
          <BoxImage >
            <img src={about2} alt='' />
          </BoxImage>
          </div>
        </Grid>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}
export default AboutPage;

export const Container= styled.div`
flex-grow: 1;
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
