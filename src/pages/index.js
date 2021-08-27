import React from 'react';
import HomePage from '../components/Home';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'
import Info from '../components/Landing Page/Info';
  
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