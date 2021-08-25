import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { 
	Container,
    Header,
    SubHeader,
} from "./LandingElements";

import boxa from './assets/images/boxa.png';
import boxb from './assets/images/boxb.png';
import boxc from './assets/images/boxc.png';


const Announcements = () => {

    return (
        <div style={{
            background: 'tomato',
        }}
        >
        <Container>
           <Grid container>
               <Grid item sm={6} md={3}>
                   <Card style={{height:'400px',}}>
                        <Header>Learning </Header>
                        <SubHeader >For ages 2 to 2.5 years old </SubHeader>
                        <img src={boxa} />
                   </Card>      
               </Grid>
               <Grid item sm={6} md={3}>
                    <Card style={{height:'400px',}}>
                        <Header>Playing </Header>
                        <SubHeader >For ages 2 to 2.5 years old </SubHeader>
                        <img src={boxb} />
                   </Card>
               </Grid>
               <Grid item sm={6} md={3}>
               <Card style={{height:'400px',}}>
                        <Header>Playing </Header>
                        <SubHeader >For ages 2 to 2.5 years old </SubHeader>
                        <img src={boxc} />
                   </Card>
               </Grid>
           </Grid>
                
            
        </Container>
        
        </div>
    )
}

export default Announcements;


