import React from 'react';
import Sidebar from './Sidebar';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar';


const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px' }}>
          <UserMenu />
          <SearchBar />
        </div>
        <div style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
          {/* Your main content goes here */}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default App;