import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import CardMedia from '@material-ui/core/CardMedia';
import '../assets/css/Contact.css'


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


function ContactPage() {
  const classes = useStyles();

  return (
    <div >
    <MainContainer>  
      <Grid container>
        <Grid item xs={12} >
          <BoxSection className={classes.boxsection} > Contact Us </BoxSection>
          <BoxHeader className={classes.boxheader} > Ask Us Anything <hr style={{width:'80%', margin:'auto',}} /></BoxHeader>
        </Grid>
        <div className="row parallax2"></div>
        <Grid container className="mt-4">
               <Grid item md={12} lg={4} className="admissiongrid">
                    <div className="admissioncarddesc">
                        <h2>Reach Out</h2>
                        <hr /> <br/> <br/> 
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="" />
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="" />
                        <label>Leave us a message...</label>
                        <textarea className="form-control" placeholder=""></textarea>
                        <br></br>
                    <div className="text-center">
                        <button className="btn btn-primary submit" type="submit">Submit</button>
                    </div>
                    </div>
               </Grid>
               <Grid item md={12} lg={4} className="admissiongrid">
                    <div className="admissioncarddesc">
                        <h2 >Opening Hours</h2>
                        <hr/> <br/> <br/>
                        <h4>Daycare</h4>
                        <p>Monday to Friday</p>
                        <p>9:00 AM to 11:00 AM</p>
                        <p>1:00 PM to 3:00 PM</p>

                        <br/><br/>
                        <h4>Office</h4>
                        <p>Monday to Friday</p>
                        <p>9:00 AM to 4:00 PM</p>
                    </div>
               </Grid>
               <Grid item md={12} lg={4} className="admissiongrid">
                   <div className="admissioncarddesc">
                        <h2>Visit Us</h2>
                        <hr/> <br/><br/>
                        <h5>Manuel L. Quezon Ave. Purok 4,</h5>
                        <h5>Sucat, Muntinlupa City, PH</h5>
                        <br/><br/>
                        <p><a href="eccd.muntinlupa@gmail.com">eccd.muntinlupa@gmail.com</a></p>
                        <p>Tel. No. 0917-829-8200</p>
                        <p>Fax No. 0516-829-8201</p>
                    </div>
                </Grid>
                <Grid item xs={12} className="mt-5 px-4">
                    <CardMedia className="border-0">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2297.3330141230745!2d121.04823170301074!3d14.44800265032054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfc36302e97d%3A0xf90288b9e03ebe7a!2s344%20Purok%201%20M.L.%20Quezon%20Avenue%2C%20Sucat%2C%20Muntinlupa%20City!5e0!3m2!1sen!2sph!4v1629546286100!5m2!1sen!2sph"
                    width="100%"
                    height="400vh"
                    frameBorder="1"
                    style={{ border: 1 }}
                    allowFullScreen="true"
                    aria-hidden="false"
                    tabIndex="0"
                    title="map"
                    alt=""
                    />
                    </CardMedia>
               </Grid>
           </Grid>
      </Grid>
    </MainContainer>

    </div>
  );
}
export default ContactPage;

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