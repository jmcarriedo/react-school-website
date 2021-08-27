import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { 
	Container,
    Header,
    Button,
} from "./LandingElements";


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import sale from './assets/images/sale.png';


export const MainContainer= styled.div`
padding: 0 20px;
background: #ee0979;  
background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);  
background: linear-gradient(to right, #ff6a00, #ee0979); 
background: dodgerblue;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {

}
`;


const ShopSection = () => {

    return (
        <MainContainer >
         <Container >
            <Grid container className='' order={{md:2, lg:1}}>  
            <Grid item md={12} lg={6} className="" order={{md:1, lg:2}}>
                <Card>
                    <img src={sale} alt=''/>
                </Card>
            </Grid>
            <Grid item md={12} lg={6} >
                <Header className='px-3 fs-3 text-white'> 
                    Avail best deals on toddler books and other learning materials for kids.
                </Header>
                <Button className="mt-3 mb-5"> 
                    <Link to='/shop' activeStyle style={{textDecoration:'none',color:'white'}}>
                        Shop Here
                    </Link>
                </Button>
            </Grid>
           
        </Grid>
        </Container>
        </MainContainer>
    )
}

export default ShopSection;


