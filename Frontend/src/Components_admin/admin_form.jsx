// components/RegisterForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    photo: null,
    role: 'admin',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    setFormData({ ...formData, photo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { username, email, photo,password, role } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('username', username);
      formDataToSend.append('email', email);
      formDataToSend.append('password', password);
      formDataToSend.append('photo', photo);
      formDataToSend.append('role', role);

      await axios.post('http://localhost:8080/admin/register', formDataToSend);
      console.log('Admin registered successfully!');
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };

  return (
    <div className="container new_admin">
    <br></br>
      <h2 className="mb-4">Admin Registration</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        {/* Other input fields (email, password) */}
        {/* ... */}

        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
