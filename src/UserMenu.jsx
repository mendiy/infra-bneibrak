import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigateTo = useNavigate();

  // Add state to track whether profile data is loaded
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  useEffect(() => {
    // Simulate fetching profile data (replace with your actual logic)
    const fakeFetchProfileData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      setIsProfileLoaded(true);
    };

    fakeFetchProfileData();
  }, []);

  const handleMoreIconClick = () => {
    // Navigate to '/currentProfile' only if the profile data is loaded
    if (isProfileLoaded) {
      navigateTo('/currentProfile');
    }
  };

  return (
    <div style={{
      marginTop: '26px',
      maxWidth: '19%%',
      minWidth: '200px',
      marginRight: '2.7%',
      marginLeft: '2.7%',
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
      backgroundColor: '#121231',
      color: 'white',
      borderRadius: '10px',
      zIndex: 1000, // Ensure it's above other elements
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* User photo */}
        <Avatar
          style={{width: '49px', height: '49px', flexShrink: '0'}}
          alt="User Photo" src="/path/to/user-photo.jpg" />
        {/* User name and title */}
        <div style={{ marginLeft: '12px' }}>
          <div style={{
            color: '#FFF',
            fontFamily: 'Roboto',
            fontSize: '13px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal'}}
          >User Name</div>
          <div style={{
            color: '#FFF',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'}}
          >Title</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit" style={{width: '45px', height: '45px', background:'#21213E', margin: '10px'}} >
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton 
          color="inherit" 
          style={{width: '45px', height: '45px', background:'#21213E', position: 'sticky'}}
          onClick={handleMoreIconClick}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserMenu;
