import React, { useState } from 'react';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === '' || formData.email === '' || formData.password === '' || formData.confirmPassword === '') {
      setError('All fields are mandatory.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('The passwords do not match.');
      return;
    }

    setError('');
    console.log('Data sent:', formData);
  };

  return (
    <div className="register-form">
      <h2>Registrazione</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Create a password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Conferma Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="Confirm your password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
