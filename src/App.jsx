import React, { useEffect, useState, useContext } from "react";
import NavigationContext from './NavigationContext';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927'
    },
    background: { default: '#0A0A1B' }
  }
});

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationContext />
      </Router>
    </ThemeProvider>
  );
};

export default App;
