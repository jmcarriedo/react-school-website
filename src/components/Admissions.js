import React from 'react';
import '../assets/css/Admissions.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import EnrolmentForm from './EnrolmentForm'
import DataProvider from './DataProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: ' 0 100px',
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




function AdmissionsPage() {
  const classes = useStyles();

  return (
    <div >
    <MainContainer>  
      <Grid container>
        <Grid item xs={12} >
          <BoxSection className={classes.boxsection} >Admissions </BoxSection>
          <BoxHeader className={classes.boxheader} >Accepting Applications for Next Year <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
        </Grid>
  
        <div className="mb-4 row parallax"></div>
        
        <Grid container > 
              <Grid item sm={6} lg={4} className="admissiongrid">
                    <div className="admissioncardheader">Age Requirements & Assigned Room Category</div>
                    <div className="admissioncarddesc">
                        <p className='text'>Nursery: 2 to 2.5 years old</p>
                        <p className='text'>Pre-K1: 3 to 3.5 years old</p>
                        <p className='text'>Pre-K2: 4 to 5 years old</p>
                    </div>
               </Grid>
               <Grid item sm={6} lg={4} className="admissiongrid">
                    <div className="admissioncardheader">Admission Requirements for Filipino Citizens</div>
                    <div className="admissioncarddesc">
                        <p className='text'> ● 2x2 colored picture of the child with name tag</p>
                        <p className='text'> ● PSA Birth Certificate</p>
                        <p className='text'> ● 2x2 colored picture of the parents/guardian</p>
                    </div>
               </Grid>
               <Grid item sm={6} lg={4} className="admissiongrid">
                   <div className="admissioncardheader">Additional Requirements for Dual Citizen Applicants</div>
                   <div className="admissioncarddesc">
                        <p className='text'> ● Certificate of Dual Citizenship</p>
                        <p className='text'> ● Philippine and Foreign Passports</p>
                    </div>
                </Grid>
                <Grid item xs={12} className='mt-5' >
                    <BoxHeader className={classes.boxheader} >Enrolment Form <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
                </Grid>
                <Grid item xs={12} className="mx-3" style={{background:'whitesmoke'}}>
                  <DataProvider>
                    <EnrolmentForm />
                  </DataProvider>
                </Grid>
           </Grid>
      </Grid>
    </MainContainer>

    </div>
  );
}
export default AdmissionsPage;

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