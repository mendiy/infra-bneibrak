import React from "react";
import SignIn from "./login";
import SignUp from "./register";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import tokenIsCorrect from './token.js'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927'
    },
    background: {default: '#0A0A1B'}
  }
});;


export default function App() {
  const isHaveValidToken = false;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            {isHaveValidToken ? (
      <Route path="/homepage" element={<Homepage />} />
        ) : (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} /> 
          </>
    )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}



