import tokenIsCorrect from './token.js';
import { useEffect, useState } from 'react';
import SignIn from "./login";
import SignUp from "./register";
import HomePage from "./HomePage";
import UserTitle from "./UserTitle";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isHaveValidToken, setIsHaveValidToken] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const isValid = await tokenIsCorrect();
        setIsHaveValidToken(isValid);

        if (isValid) navigateTo('/home', { replace: true });
      } catch (error) {
        console.error('Error checking token:', error);
      }
    };

    checkToken();
  }, [navigateTo]);

  return (
    <Routes>
      {isHaveValidToken ? (
        <Route path="/home" element={<HomePage />} />
      ) : (
        <>
          <Route path="/userTitle" element={<UserTitle />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}

export default Navigation;
