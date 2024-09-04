import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const userIcon = require('./../..//imgaes/account_circle_25dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png');

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <p className='Logo'>Quick Reach</p>
      <div className='navbar-links'>
        <Link to="/" className='navbar-link'>Home</Link>
        <Link to="/login" className='navbar-link'>Login</Link>
        <Link to="/signup" className='navbar-link'>Sign Up</Link>
        <img className='account' src={userIcon} alt="Account" />
      </div>
    </div>
  );
}

export default Navbar;
