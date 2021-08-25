import React from 'react';
import HomePage from '../components/Home';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'
  
const Home = () => {
  return (
    <div>
      <Sidebar />
      <HomePage />
      <Footer />
    </div>
  );
};
  
export default Home;