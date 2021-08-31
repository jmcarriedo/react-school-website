import React from 'react';
import Rooms from './Landing Page/Rooms'
import Banner from './Landing Page/Banner'
import About from './Landing Page/About'
import Programs from './Landing Page/Programs'
import Testimonials from './Landing Page/Testimonials'
import Photos from './Landing Page/Photos'
import ShopSection from './Landing Page/Shop'
import Info from './Landing Page/Info';
import Footer from './Footer';
import Sidebar from './Sidebar/Sidebar';



const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <Info  />
            <Banner />
            <Rooms />
            <About />
            <Programs />
            <Testimonials />
            <Photos />
            <ShopSection />
            <Footer />
        </div>
    )
}

export default HomePage;
