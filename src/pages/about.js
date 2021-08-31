import React from 'react';
import AboutPage from '../components/About';
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar';

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