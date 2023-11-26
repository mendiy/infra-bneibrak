// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './login';
import SignUp from './register';
import Homepage from './HomePage';
import UserTitle from './UserTitle';
import CircularColor from './CircularProgress';
import checkToken from './token';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    background: { default: '#0A0A1B' },
  },
});

const App = () => {
  const navigateTo = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await checkToken();
        if(response == 200  && (window.location.pathname == '/' || window.location.pathname == '/register' )) navigateTo('/homepage')
        setIsLoaded(true);
      };


    const axiosInterceptorRequest = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.authorization = token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const axiosInterceptorResponse = axios.interceptors.response.use(
      (response) => {
      
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401 && !['/register', '/', '/userTitle'].includes(window.location.pathname)) {
          setTimeout(() => {
            console.log('You are not authorized');
            navigateTo('/');
           
          }, 1000);
        }
        return Promise.reject(error);
      }
     
    );
   
    // setIsLoaded(true);
    fetchData();
    
    
    

    return () => {
      axios.interceptors.request.eject(axiosInterceptorRequest);
      axios.interceptors.response.eject(axiosInterceptorResponse);
    };
  }, [navigateTo]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {!isLoaded ? (
          <Route path="/*" element={<CircularColor />} />
        ) : (
          <>
            <Route path="/userTitle" element={<UserTitle />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
