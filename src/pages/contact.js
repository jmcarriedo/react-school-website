import React from 'react';
import ContactPage from '../components/Contact';
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar';
  
const Contact = () => {
  return (
    <div>
      <Sidebar />
      <ContactPage />
      <Footer />
    </div>
  );
};
  
export default Contact;