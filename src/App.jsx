import React from "react";
import SignIn from "./login";
import SignUp from "./register";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from "./HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927'
    },
    background: {default: '#0A0A1B'}
  }
});;


export default function App() {
    return (
      <ThemeProvider theme={theme}>
        <HomePage />
      {/* <Router>
          <Routes>
          <Route exact path="/register"
            element ={<SignUp />} />
          <Route path="/" element={<SignIn />} /> 
          </Routes>
      </Router> */}
      </ThemeProvider>
    )
  }
    


