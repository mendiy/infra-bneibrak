import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserMenu = () => {
  const navigateTo = useNavigate();

  const handleMoreIconClick = () => {
    navigateTo('/currentProfile');
  };

  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me');

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { firstName, lastName, title } = response.data.result;
        setProfileData({ firstName, lastName, title });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Error fetching profile data. Please try again later.');
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div style={{
      marginTop: '26px',
      maxWidth: '24vw', // Responsive width
      minWidth: '200px',
      marginRight: '2.7vw',
      marginLeft: '2.7%',
      height: '65px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'right',
      padding: '0 16px',
      backgroundColor: '#121231',
      color: 'white',
      borderRadius: '10px',
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          style={{ width: '49px', height: '49px', flexShrink: '0' }}
          alt={profileData.firstName} />
        <div style={{ marginLeft: '12px' }}>
          <div style={{ ...userInfoStyle, fontWeight: '700' }}>
            {profileData.firstName + ' ' + profileData.lastName}
          </div>
          <div style={userInfoStyle}>{profileData.title}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit" style={iconButtonStyle}>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton 
          color="inherit" 
          style={iconButtonStyle}
          onClick={handleMoreIconClick}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserMenu;

// Styles
const userInfoStyle = {
  color: '#FFF',
  fontFamily: 'Roboto',
  fontSize: '13px',
  fontStyle: 'normal',
  lineHeight: 'normal',
};

const iconButtonStyle = {
  width: '45px',
  height: '45px',
  background: '#21213E',
  margin: '10px',
};
