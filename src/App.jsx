import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import SignIn from './pages/login';
import SignUp from './pages/register';
import Layout from './pages/Layout';
import UserTitle from './pages/UserTitle';
import CircularColor from './components/CircularProgress';
import checkToken from './verifyToken';
import UpdateProfile from './pages/UpdateProfile';
import ImageUploader from './pages/ImageUploader';
import CurrentProfile from './components/CurrentProfile';
import {useLocation} from 'react-router-dom';
import cloudinary from 'cloudinary-core';

// import dotenv from 'dotenv'
// dotenv.config()

// import { loadEnv} from 'vite'



export const cl = new cloudinary.Cloudinary({ cloud_name: 'megobb' });
// const env = loadEnv(mode, process.cwd(), '')
export const api = 'https://mendi-test-mendiys-projects.vercel.app'


const App = () => {

  console.log('start....')
  
  
  const navigateTo = useNavigate();
  const location = useLocation();
  const [reload, setReload] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setReload(prev => prev+1); 
    const fetchData = async () => {
      const response = await checkToken();
      if (response === 200 && (window.location.pathname === '/' || window.location.pathname === '/register')) navigateTo('/dashboard');
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

    // fetchData();

    return () => {
      axios.interceptors.request.eject(axiosInterceptorRequest);
      axios.interceptors.response.eject(axiosInterceptorResponse);
    };
  }, [navigateTo, location]);


  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {!isLoaded ? (
          <Route path="/*" element={<CircularColor />} />
        ) : (
          <>
            <Route path="/imageLoader" element={<ImageUploader />} />
            <Route path="/userTitle" element={<UserTitle />} />
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path='/currentProfile' element={<CurrentProfile key={reload}/>} />
            <Route path='/updateProfile' element={<UpdateProfile />} />
            {/* <Route path="/Projects/*" element={<Layout /> } /> */}
          </>
        )}
      </Routes>  
    </ThemeProvider>
  );
};

export default App;
