import React from 'react';
import Grid from '@material-ui/core/Grid';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ToysIcon from '@material-ui/icons/Toys';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import "./assets/css/Rooms.css";
import { 
	Container,
    MainHeader,
    Header,
    SubHeader,
    Paragraph,
} from "./LandingElements";


const Rooms = () => {

    return (
        <div style={{
            background: 'papayawhip',
        }}
        >
        <Container>
        <Grid container>
                <Grid item xs={12}>
                   <MainHeader><span className="tracking-in-expand">Rooms</span></MainHeader>
                </Grid>
               <Grid item sm={12} md={4} style={{padding:'0 30px',}}>
                   
                    <Header>Nursery</Header>
                    <ToysIcon style={{fontSize:'50px',color:'tomato'}} className="rotate-90-cw"/>
                    <SubHeader ><i>For ages 2 to 2.5 years old </i></SubHeader>
                    <Paragraph>
                    This age is filled with so much wonder and curiosity. That’s why we offer a ton of books and toys and bring their artwork down to kids eye level. Children in discovery preschool also begin to learn the basic building blocks of how we all work together in a classroom. 
                    </Paragraph>
               </Grid>
               <Grid item sm={12} md={4} style={{padding:'0 30px',}}>
                    <Header>Pre-K1</Header>
                    <ColorLensIcon style={{fontSize:'50px',color:'cornflowerblue'}} className="rotate-90-cw1"/>
                    <SubHeader ><i>For ages 3 to 3.5 years old</i></SubHeader>
                    <Paragraph>
                    This age is all about expression, when kids really start to form their own ideas about what they want to play and how they want to create. Every day your child will explore science experiments, create artwork, and play pretend. 
                    </Paragraph>
               </Grid>
               <Grid item sm={12} md={4} style={{padding:'0 30px',}}>
                    <Header>Pre-K2</Header>
                    <MenuBookIcon style={{fontSize:'50px',color:'#3d998a'}} className="flip-vertical-left"/>
                    <SubHeader ><i>For ages 4 to 5 years old </i></SubHeader>
                    <Paragraph>
                    In pre-K, your child will practice how to write their name. We’ll also work on our ABCs, using letters and drawings to describe things like people, places, experiences, and feelings. Social skills development is also a primary focus during this stage.
                    </Paragraph>
               </Grid>
           </Grid>
        </Container>
        </div>
    )
}

export default Rooms;


