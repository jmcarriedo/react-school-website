import React from 'react';
import HomePage from '../components/Home';
import Footer from '../components/Footer'
import Info from '../components/Landing Page/Info';
  
const Home = () => {
  return (
    <div>
      <Info />
     
      <HomePage />
      <Footer />
    </div>
  );
};
  
export default Home;