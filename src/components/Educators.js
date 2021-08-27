import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import '../assets/css/Educators.css'
import Avatar from '@material-ui/core/Avatar';
import teacher1 from '../assets/images/teacher1.png';
import teacher2 from '../assets/images/teacher2.jpeg';
import teacher3 from '../assets/images/teacher3.jpeg';



const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  avatarsection: {
    margin: '20px   auto',
    width: '200px',
    height: '200px',
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
    textDecorationThickness: '1px',
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

export const MainContainer= styled.div`
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


function EducatorsPage() {
  const classes = useStyles();

  return (
    <div >
    <MainContainer>  
      <Grid container>
        <Grid item xs={12} >
          <BoxSection className={classes.boxsection} > Our Educators </BoxSection>
          <BoxHeader className={classes.boxheader} > Your Children's Guide <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
        </Grid>
        
        <Grid item sm={12} md={12} >
          <Box className={classes.boxcard}>
          <BoxText >
            <p>The early education teachers at our center are passionate about your child's happiness and growth. They're dedicated to providing a safe, nurturing environment that cultivates self-esteem. Teaching is more than a job to them. It's an opportunity to share their passion for life while they awaken the wonder inside each and every child. </p>
            <p>Our child care center devotes more time and resources to teacher training than any other childcare provider. Twice a year we host the largest early childhood teacher training program in the country. Our teachers are dedicated to developing your child's potential and are sensitive to your child's individual needs. </p>
          </BoxText>
          </Box>
        </Grid>

        <Grid container >
                <Grid item xs={12}>
                    <br/>
                </Grid>

               <Grid item sm={6} lg={4} className="">
                    <Avatar src={teacher1} className={classes.avatarsection} alt=''/>
                    <div className="teacherheader">Teacher Nikki</div>
               </Grid>
               <Grid item sm={6} lg={4} className="">
                    <Avatar src={teacher2} className={classes.avatarsection} alt='' />  
                    <div className="teacherheader">Teacher PJ</div>
               </Grid>
               <Grid item sm={6} lg={4} className="">
                    <Avatar src={teacher3} className={classes.avatarsection} alt='' />  
                   <div className="teacherheader">Teacher Caren</div>
                </Grid>
                
           </Grid>
      </Grid>
    </MainContainer>
    </div>
  );
}
export default EducatorsPage;