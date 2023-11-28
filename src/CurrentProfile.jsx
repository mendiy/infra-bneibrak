import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, ListItemIcon } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';




const CurrentProfile = () => {
  const navigateTo = useNavigate();

  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me');
        
        // Check if the response status is OK (200)
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {firstName, lastName, email, title } = response.data.result;

        // Set profile data from the response
        setProfileData({firstName, lastName, email, title });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Error fetching profile data. Please try again later.');
      }
    };

    fetchProfileData();
  }, []);

  
  const handleUpdateProfile = () => {
    // Navigate to the '/UpdateProfile' route
    navigateTo('/updateProfile');
  };

  if (error) {
    // Render an error message if there was an issue fetching the data
    return (
      <div>
        <Typography variant="h4">Error</Typography>
        <Typography variant="body1">{error}</Typography>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4">My Profile</Typography>
      <Typography variant="body1">First Name: {profileData.firstName}</Typography>
      <Typography variant="body1">Last Name: {profileData.lastName}</Typography>
      <Typography variant="body1">Email: {profileData.email}</Typography>
      <Typography variant="body1">Title: {profileData.title}</Typography>
      <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
        <ListItemIcon>
      <EditOutlinedIcon />
      </ListItemIcon>
        Edit Profile
      </Button>
    </div>
  );
};

export default CurrentProfile;


