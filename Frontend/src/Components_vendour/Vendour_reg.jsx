// components/RegisterForm.js

import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    vname: '',
    email: '',
    photo: null,
    password: '',
    phone:0,
    product:'',
    confirm:'',
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
      const { vname, email, photo,password,phone,product,confirm } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('vname', vname);
      formDataToSend.append('email', email);
      formDataToSend.append('photo', photo);
      formDataToSend.append('password', password);
      formDataToSend.append('phone', phone);
      formDataToSend.append('product', product);
      formDataToSend.append('confirm ', confirm );

      await axios.post('http://localhost:8080/vendour/register', formDataToSend);
      console.log('Admin registered successfully!');
      localStorage.setItem("vendours",JSON.stringify(formDataToSend)); 
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };

  return (
    <div className="container new_admin">
      <h2 className="mb-4">Vendour Registration</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
           vname
          </label>
          <input
            type="text"
            name="vname"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
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
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Phone
          </label>
          <input
            type="number"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            product
          </label>
          <input
            type="text"
            name="product"
            className="form-control"
            value={formData.product}
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
