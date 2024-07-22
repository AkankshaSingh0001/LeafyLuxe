import React, { useState } from 'react';
import './slot.css';
import Nav1 from './Nav1';
import axios from 'axios';
import Alert from './Alert'; // Import the custom alert component

const SlotBookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '',
  });
  const [alert, setAlert] = useState(null); // State for custom alert

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.date || !formData.timeSlot) {
      setAlert({ message: 'Please select a date and time slot.'});
      return;
    }

    setAlert({ message: 'Appointment scheduled successfully?'});
    setFormData({
      date: '',
      timeSlot: '',
    });

    // Confirm booking after a delay
    setTimeout(async () => {
      try {
        const logindata = JSON.parse(localStorage.getItem('logindata'));
        const userId = logindata._id;
        await axios.post('http://localhost:8080/submit-appointment', { ...formData, userId });
        
      } catch (err) {
        console.error('Error submitting appointment:', err);
        setAlert({ message: 'Error submitting appointment. Please try again later.'});
      }
    }, 2000); // Adjust the delay as needed
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  return (
    <>
      <Nav1 />
      <div className="slot-booking-form-container">
      {alert && <Alert message={alert.message} onClose={handleAlertClose} />}
        <h3 className='slot1'>Thank you For your Trust!</h3><br></br>
        <h5 className='slot1'>Our Expert will contact you about the Services before reaching your place.</h5><br></br>
        <div className="middle-part">
          <h2>Slot Booking</h2>
           {/* Render custom alert */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">Select a time slot</option>
                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                {/* Add more time slots as needed */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary11">Book Slot</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SlotBookingForm;
