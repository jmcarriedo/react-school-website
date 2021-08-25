import React from 'react';
import Rooms from './Landing Page/Rooms'
import Banner from './Landing Page/Banner'
import About from './Landing Page/About'
import Programs from './Landing Page/Programs'
import Testimonials from './Landing Page/Testimonials'
import Photos from './Landing Page/Photos'
import ShopSection from './Landing Page/Shop'
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer';


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Rooms />
            <About />
            <Programs />
            <Testimonials />
            <Photos />
            <ShopSection />
        </div>
    )
}

export default HomePage;
