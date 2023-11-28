import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const UpdateProfile = () => {
  const navigateTo = useNavigate(); // Using the useNavigate hook

  // State variables for form fields
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleUpdate = async () => {
    try {
      // Prepare the data to be sent in the patch request
      const data = {
        newFirstName,
        newLastName,
        newEmail,
      };

      // Send a patch request to update the user profile
      await axios.patch('http://localhost:5000/api/users/updateMe', data);

      // Redirect to the home page after the update
      navigateTo('/homepage');
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Handle the error appropriately, e.g., display an error message
    }
  };

  return (
    <div>
      <Typography variant="h4">Update User Profile</Typography>
      {/* You might include additional form fields or UI elements here */}
      <TextField
        label="New First Name"
        variant="outlined"
        fullWidth
        value={newFirstName}
        onChange={(e) => setNewFirstName(e.target.value)}
      />
      <TextField
        label="New Last Name"
        variant="outlined"
        fullWidth
        value={newLastName}
        onChange={(e) => setNewLastName(e.target.value)}
      />
      <TextField
        label="New Email"
        variant="outlined"
        fullWidth
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update
      </Button>
    </div>
  );
};

export default UpdateProfile;
