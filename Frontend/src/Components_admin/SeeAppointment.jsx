import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SeeAppointment.css'
import Nav from './navproduct';


function AppointmentsList() {
  const [appointmentsWithCustomers, setAppointmentsWithCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/seeappointments');
        setAppointmentsWithCustomers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Error fetching appointments. Please try again later.');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Nav></Nav><br></br><br></br><br></br>
        <div>
      {appointmentsWithCustomers.length === 0 ? (
        <div>No appointments found.</div>
      ) : (
        <table className='adminappo'>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {appointmentsWithCustomers.map(({ appointment, customer }) => (
              <tr key={appointment._id}>
                <td>{appointment._id}</td>
                <td>{appointment.date}</td>
                <td>{appointment.timeSlot}</td>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
}

export default AppointmentsList;
