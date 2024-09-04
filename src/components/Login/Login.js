import React, { useState, useContext } from 'react';
import { AuthContext } from './../../Context/StoreContext';
import './Login.css';

const View = require('./../../imgaes/lock_open_25dp_5F6368_FILL0_wght400_GRAD0_opsz24.png');
const Lock = require('./../../imgaes/lock_25dp_5F6368_FILL0_wght400_GRAD0_opsz24.png');

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h2 className='login-title'>Login</h2>
        
        <div className='login-input-group'>
          <label className='login-label'>Email:</label>
          <input
            className='login-input'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='login-input-group'>
          <label className='login-label'>Password:</label>
          <div className="login-input-wrapper">
            <input
              className='login-input'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p onClick={() => setShowPassword(!showPassword)} className="password-toggle">
              {showPassword ? <img src={Lock} alt="Hide password" /> : <img src={View} alt="Show password" />}
            </p>
          </div>
        </div>

        <button className='login-button' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
