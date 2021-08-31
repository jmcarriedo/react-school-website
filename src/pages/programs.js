import React from 'react';
import ProgramsPage from '../components/Programs';
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar/Sidebar';
  
const Programs = () => {
  return (
    <div>
      <Sidebar />
      <ProgramsPage />
      <Footer />
    </div>
  );
};
  
export default Programs;