// App.js
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider, Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './login';
import SignUp from './register';
import Homepage from './HomePage';
import UserTitle from './UserTitle';
import CircularColor from './CircularProgress';
import checkToken from './verifyToken';
import RemoteApp from 'project_app/App'
// const RemoteApp = React.lazy(() => import('project_app/App'));
import Sidebar from './Sidebar';

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
      if (response === 200 && (window.location.pathname === '/' || window.location.pathname === '/register')) navigateTo('/homepage');
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

    fetchData();

    return () => {
      axios.interceptors.request.eject(axiosInterceptorRequest);
      axios.interceptors.response.eject(axiosInterceptorResponse);
    };
  }, [navigateTo]);

  // const router = useMemo(() => createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Homepage />,
  //     children: [
  //       {
  //         path: "projects/:page",
  //         element: <RemoteApp />,
  //       },
  //       // Add more routes for other pages in the remote app if needed
  //     ],
  //   },
  // ]), []);

  return (
    <ThemeProvider theme={theme}>
    {/* <Sidebar /> */}
      {/* <RouterProvider router={router}> */}
        <Routes>
          {!isLoaded ? (
            <Route path="/*" element={<CircularColor />} />
          ) : (
            <>
              <Route path="/userTitle" element={<UserTitle />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/projects" element={<RemoteApp />} />
            </>
          )}
        </Routes>
      {/* </RouterProvider> */}
    </ThemeProvider>
  );
};

export default App;
