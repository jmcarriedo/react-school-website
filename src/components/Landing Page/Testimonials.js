import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GradeIcon from '@material-ui/icons/Grade';
import { 
	Container,
    MainHeader,
    Testimonial,
    Paragraph,
} from "./LandingElements";

const Testimonials = () => {

    return (
        <div style={{
            background: '#fceabb', 
            background: '-webkit-linear-gradient(to right, #f8b500, #fceabb)',  
            background: 'linear-gradient(to top, #f8b500, #fceabb)', 
        }}
        >   
        <Container>
            <Carousel 
                variant="dark"
                indicators={false}
            >
            <Carousel.Item >
                <MainHeader style={{paddingBottom:'20px',}}>What Parents Think</MainHeader>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow',}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <Testimonial style={{color:'midnightblue'}}>“For the first time in his life my son jumps out of bed first thing in the morning without being told to get up, does his homework without being told, and spends all his free time on creative projects. This school has transformed our lives."</Testimonial>
                <Paragraph style={{textAlign:'center'}}><i>— Nathan's Mom</i></Paragraph>
            </Carousel.Item>
            <Carousel.Item  >
                <MainHeader style={{paddingBottom:'20px',}}>What Parents Think</MainHeader>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <Testimonial style={{color:'midnightblue'}}>“Simply the best out there! The Little Rainbows School encourages my kids to be resourceful, kind, and compassionate, not just intellectuals. The values they teach will equip my kids to become better persons when they grow up."</Testimonial>
                <Paragraph style={{textAlign:'center'}}><i>— Emma's Dad</i></Paragraph>
            </Carousel.Item>
            <Carousel.Item >
                <MainHeader style={{paddingBottom:'20px',}}>What Parents Think</MainHeader>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <span><GradeIcon style={{fontSize:'40px',color:'yellow'}}/></span>
                <Testimonial style={{color:'midnightblue'}}>“No other prep school, no other faculty, holds your family’s cares so close to heart. What more can any family possibly want for their child? We're glad to be a part of the Little Rainbows family."</Testimonial>
                <Paragraph style={{textAlign:'center'}}><i>— Susie's Mom</i></Paragraph>
            </Carousel.Item>
            </Carousel>
        </Container>
        </div>
    )
}

export default Testimonials;


