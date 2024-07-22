import React, { useState } from 'react';
import axios from 'axios';

const ServiceTeamForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: null,
    phone: '',
    address: '',
    appointment_id: '', // corrected: appointment_id spelling
    availability: true, // Defaulting to true as per schema
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
      const { name, email, photo, phone, address, appointment_id, availability } = formData;

      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('email', email);
      formDataToSend.append('photo', photo);
      formDataToSend.append('phone', phone);
      formDataToSend.append('address', address);
      formDataToSend.append('appointment_id', appointment_id); // Corrected: appointment_id spelling
      formDataToSend.append('availability', availability);

      await axios.post('http://localhost:8080/serviceteam/register', formDataToSend);
      console.log('Service team registered successfully!');
    } catch (error) {
      console.error('Error registering service team:', error);
    }
  };

  return (
    <div className="container new_serviceteam"><br></br>
      <h2 className="mb-4">Service Team Registration</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a name.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          <div className="invalid-feedback">Please provide a valid email.</div>
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
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide a phone number.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Please provide an address.</div>
        </div>
        
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="availability"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="availability">
            Available
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default ServiceTeamForm;