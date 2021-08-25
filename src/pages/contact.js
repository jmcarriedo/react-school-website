import React from 'react';
import ContactPage from '../components/Contact';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'
  
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