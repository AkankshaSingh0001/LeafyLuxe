import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './/Cusappointment.css'; // Import the CSS file for styling
import Nav from './Nav2';
import Nav2  from './Nav1';

function UserAppointments() {
  const [userAppointments, setUserAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch user ID from local storage
        const logindata = JSON.parse(localStorage.getItem('logindata'));
        const userId = logindata._id;
        if (!userId) {
          throw new Error('User ID not found in local storage.');
        }

        // Fetch appointments for the user
        const response = await axios.post('http://localhost:8080/user-appointments', { userId });
        setUserAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user appointments:', error);
        setError('Error fetching user appointments. Please try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>; // Apply loading style
  }

  if (error) {
    return <div className="error">{error}</div>; // Apply error style
  }

  return (
    <>
    <Nav2></Nav2>
    <Nav></Nav><br></br>
      <div className="user-appointments-container">
      <h2 className="headinggggg">Your Appointments</h2>
      <ul className="appointment-list">
        {userAppointments.map((appointment) => (
          <li key={appointment._id} className="appointment-item">
            <div className="detail"><span>Appontment Id:</span> {appointment._id}</div><br></br>
            <div className="detail"><span><i class="fa fa-calendar" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Date:</span> {appointment.date}</div>
            <div className="detail"><span><i class="fa-solid fa-clock">&nbsp;&nbsp;&nbsp;</i>Time Slot:</span> {appointment.timeSlot}</div>
            {/* Add more appointment details as needed */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default UserAppointments;
