import React from 'react';
import styled from 'styled-components';
import { 
	Container,
    MainHeader,
    Header,
    SubHeader,
    Paragraph,
} from "./LandingElements";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import about from './assets/images/about.jpeg';
import './assets/css/Landing.css';
import "./assets/css/Rooms.css";

export const MainContainer=styled.div`{
display: flex;
justify-content: center;
margin: auto;
padding: 0 20px;
background: #2980B9; 
background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); 
background: linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9);
}
`;


const About = () => {
    return (
        <MainContainer>
        <Container>
        <Grid container>
            <Grid item md={12} lg={6} className="aboutimage">
                <Card>
                    <img src={about} alt=""/>
                </Card>
            </Grid>
            <Grid item md={12} lg={6} className="aboutdesc" style={{marginleft:'20px'}}>
                <MainHeader><span className="tracking-in-expand">Our Approach</span></MainHeader>
                <Header>We give children a big boost on learning, for life! </Header>
                <SubHeader style={{textAlign:'justify',}} >We’re more than educators. We help families build confidence for life. Our programs give children a foundation they can build on. Wherever they go after they leave Little Rainbows ChildCare, they’ll be ready to think bigger, feel stronger, and aim higher.
                <br/><br/>Every day at our center, you can be confident that your child is in the very best hands. Every classroom is a mini-community where we help every child succeed on their own terms.
                </SubHeader>
                
            </Grid>
        </Grid>
        </Container>
        </MainContainer>
    )
}

export default About;


