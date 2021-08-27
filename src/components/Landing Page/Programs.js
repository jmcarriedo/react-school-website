import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import "./assets/css/Rooms.css";
import { 
	Container,
    MainHeader,
} from "./LandingElements";
import program1 from './assets/images/program1.jpeg';
import program2 from './assets/images/program2.jpeg';
import program3 from './assets/images/program3.jpeg';
import program4 from './assets/images/program4.jpeg';
import program5 from './assets/images/program5.jpeg';
import program6 from './assets/images/program6.jpeg';


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
                        <img src={program1} className="programimage" alt=''/>
                        <div className="landingcardheader">Writing</div>
                    </CardMedia>  
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={program2} className="landingprogramimage" alt=''/>
                        <div className="landingcardheader">Drawing</div>
                    </CardMedia>
                    
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={program3} className="landingprogramimage" alt=''/>
                        <div className="landingcardheader">Phonetic Sounds</div>
                   </CardMedia>
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={program4} className="landingprogramimage" alt=''/>
                        <div className="landingcardheader">Counting Numbers</div>
                   </CardMedia>  
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={program5} className="landingprogramimage" alt=''/>
                        <div className="landingcardheader">Handicraft</div>
                   </CardMedia>
                   
               </Grid>
               <Grid item sm={6} lg={4} className="landingprogramgrid">
                    <CardMedia className="landingcard border-0">
                        <img src={program6} className="landingprogramimage" alt=''/>
                        <div className="landingcardheader">Playtime</div>
                   </CardMedia>
                   
               </Grid>
           </Grid>
            
        </Container>
        
        </div>
    )
}

export default Programs;


