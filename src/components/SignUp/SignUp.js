import React, { useState, useContext } from 'react';
import { AuthContext } from './../../Context/StoreContext';
import './SignUp.css'; // Assuming you will add styling in this CSS file

const View = require('./../../imgaes/lock_open_25dp_5F6368_FILL0_wght400_GRAD0_opsz24.png');
const Lock = require('./../../imgaes/lock_25dp_5F6368_FILL0_wght400_GRAD0_opsz24.png');

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('caller');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    register(name, email, number, password, role);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="register-container">
        <div className="register-form-container">
          <h2 className="register-title">Register</h2>
          
          <div className="register-input-group">
            <label className="register-label">Name:</label>
            <input
              type="text"
              className="register-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label className="register-label">Email:</label>
            <input
              type="email"
              className="register-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label className="register-label">Phone Number:</label>
            <input
              type="text"
              className="register-input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="register-input-group">
            <label className="register-label">Password:</label>
            <div className="register-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="register-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password-toggle" onClick={togglePasswordVisibility}>
                <img src={showPassword ? View : Lock} alt="Toggle Password Visibility" />
              </div>
            </div>
          </div>

          <div className="register-input-group">
            <label className="register-label">Role:</label>
            <select
              className="register-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="caller">Caller</option>
              <option value="assigner">Assigner</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};
