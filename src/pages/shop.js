import React from 'react';
import ShopPage from '../components/Shop';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <div>
      <Sidebar />
      <ShopPage />
      <Footer />
    </div>
  );
};
  
export default Shop;