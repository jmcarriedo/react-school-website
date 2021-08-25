import React from 'react';
import AboutPage from '../components/About';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Sidebar />
      <AboutPage />
      <Footer />
    </div>
  );
};
  
export default About;