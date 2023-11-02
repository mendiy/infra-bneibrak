import React from "react";
import SignIn from "./login";
import SignUp from "./register";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


export default function App() {
    return (
    <Router>
        <Routes>
        <Route exact path="/register"
          element ={<SignUp />} />
        <Route path="/" element={<SignIn />} /> 
        </Routes>
    </Router>
    )
  }
    


