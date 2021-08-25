import React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import "./assets/css/Rooms.css";
import { 
	Container,
    MainHeader,
} from "./LandingElements";


const boxa={
    url: "https://cdn.pixabay.com/photo/2018/08/06/16/43/writing-3587908_960_720.jpg",
}
const boxb={
    url: "https://cdn.pixabay.com/photo/2017/01/26/05/13/oekaki-2009817_960_720.jpg",
}
const boxc={
    url: "https://images.pexels.com/photos/8613121/pexels-photo-8613121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940g",
}
const boxd={
    url: "https://images.pexels.com/photos/8613095/pexels-photo-8613095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}
const boxe={
    url: "https://images.pexels.com/photos/6941096/pexels-photo-6941096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}
const boxf={
    url: "https://images.pexels.com/photos/8613366/pexels-photo-8613366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}

const Programs = () => {

    return (
        <div style={{
            background: '#fff'
        }}
        >
        <Container>
           <Grid container >
                <Grid item xs={12} className="landingprogramgrid">
                   <MainHeader><span className="tracking-in-expand">Programs</span></MainHeader>
                </Grid>
                <Grid item xs={12}>
                    <br/>
                </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                   <CardMedia className="landingcard border-0">
                        <img src={boxa.url} className="programimage"/>
                        <div className="landingcardheader">Writing</div>
                    </CardMedia>  
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={boxb.url} className="landingprogramimage"/>
                        <div className="landingcardheader">Drawing</div>
                    </CardMedia>
                    
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={boxc.url} className="landingprogramimage"/>
                        <div className="landingcardheader">Phonetic Sounds</div>
                   </CardMedia>
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={boxd.url} className="landingprogramimage"/>
                        <div className="landingcardheader">Counting Numbers</div>
                   </CardMedia>  
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={boxe.url} className="landingprogramimage"/>
                        <div className="landingcardheader">Handicraft</div>
                   </CardMedia>
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={boxf.url} className="landingprogramimage"/>
                        <div className="landingcardheader">Playtime</div>
                   </CardMedia>
                   
               </Grid>
           </Grid>
            
        </Container>
        
        </div>
    )
}

export default Programs;


