import React from 'react';
import {Carousel} from 'react-bootstrap';
import './assets/css/Landing.css';

const Banner = () => {
    return (
        <div>
            <Carousel 
                fade
                pause="hover"
                controls={false}
                indicators={false}
            >
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/701312584917450766/879596464425279508/sbanner.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item  interval={2000}>
                <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/701312584917450766/878259319525740554/sbanner1.png"
                alt="Second slide"
                /> 
                
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/701312584917450766/878259319777411122/sbanner2.png"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;
