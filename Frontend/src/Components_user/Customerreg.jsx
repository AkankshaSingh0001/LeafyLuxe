import React, { useState } from 'react';
import axios from 'axios';
import './Costomerreg.css'; // Import CSS file
import Nav1 from './Nav1';


const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="alert">
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};
 

const CustomerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    DOB: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',
    password: '',
    photo: '', // This field can be used to upload a photo if needed
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
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('DOB', formData.DOB);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('pincode', formData.pincode);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('photo', formData.photo);

      await axios.post('http://localhost:8080/registercustomer', formDataToSend);
      console.log('Customer registered successfully!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error registering customer:', error);
    }
  };


  const [showMessage, setShowMessage] = useState(false);

  const handleShowAlert = () => {
    setShowMessage(true);
  };

  const handleCloseAlert = () => {
    setShowMessage(false);
    window.location.replace('/login');
  }

  

  return (
      <>
      <Nav1></Nav1>
              <div className='cosreg'>
            <div className="registration-container">
      <h2>Customer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="form-control" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Upload Image</label>
          <input
            type="file"
            name="photo"
            className="form-control"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleShowAlert}>Register</button>
        {showMessage && (
        <CustomAlert
          message="This is an alert message!"
          onClose={handleCloseAlert}
        />
      )}
      </form>
    </div>
      </div>
      </>
  );
};

export default CustomerRegistrationForm;
