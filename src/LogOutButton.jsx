import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'



export default function LogOutButton() {

 const navigateTo = useNavigate()

 
  return (
    <Box sx={{ mt: "7vh" ,  ml: "3vh" , mb: "1px"}}>
      <Button variant="contained"  onClick={() => { 
        console.log('logout')
        localStorage.removeItem('authToken')
        navigateTo('/')

      }}
       >Logout</Button>
    </Box>
  );
}