import React from 'react';
import HomePage from '../components/Home';
import Footer from '../components/Footer'
import Info from '../components/Landing Page/Info';
import Sidebar from '../components/Sidebar/Sidebar';
  
const Home = () => {
  return (
    <div>
      <Info />
      <Sidebar />
      <HomePage />
      <Footer />
    </div>
  );
};
  
export default Home;