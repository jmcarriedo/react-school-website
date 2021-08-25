import React from 'react';
import ProgramsPage from '../components/Programs';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer'
  
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