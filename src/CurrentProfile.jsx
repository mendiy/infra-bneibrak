import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button } from '@mui/material';


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

        let  {firstName, lastName, email } = response.data.result;

        // Set profile data from the response
        setProfileData({firstName, lastName, email });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Error fetching profile data. Please try again later.');
      }
    };

    fetchProfileData();
  }, []);

  
  const handleUpdateProfile = () => {
    // Navigate to the '/UpdateProfile' route
    navigateTo('/UpdateProfile');
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
      <Typography variant="h4">Profile Page</Typography>
      <Typography variant="h6">First Name: {profileData.firstName}</Typography>
      <Typography variant="body1">Last Name: {profileData.lastName}</Typography>
      <Typography variant="body1">Email: {profileData.email}</Typography>
      <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
        Update Profile
      </Button>
    </div>
  );
};

export default CurrentProfile;


