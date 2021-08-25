import React from 'react';
import AdmissionsPage from '../components/Admissions';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'
  
const Admissions = () => {
  return (
    <div>
      <Sidebar />
      <AdmissionsPage />
      <Footer />
    </div>
  );
};
  
export default Admissions;