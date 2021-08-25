import React from 'react';
import DataProvider from '../components/DataProvider';
import List from '../components/List';

const Admin = () => {
  return (
    <div>
      <DataProvider>
        <List />
      </DataProvider>
    </div>
  );
};
  
export default Admin