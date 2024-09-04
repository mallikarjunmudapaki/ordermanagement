import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { RegisterPage } from './components/SignUp/SignUp';
import { LoginPage } from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
