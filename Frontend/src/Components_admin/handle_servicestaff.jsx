import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './navproduct';
import { Link } from 'react-router-dom';
import './handle_admins.css';

const Delivery = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = () => {
    axios.get('http://localhost:8080/getserviceteam')
      .then(response => {
        setDeliveries(response.data);
      })
      .catch(error => {
        console.error('Error fetching deliveries:', error);
      });
  };

  const handleDelete = async (deliveryId) => {
    try {
      await axios.delete(`http://localhost:8080/deliveries/${deliveryId}`);
      fetchDeliveries();
    } catch (error) {
      console.error('Error deleting delivery:', error);
    }
  };

  return (
    <>
      <Nav />
      

      <div className=''><br></br>
      <Link to='/regservicestaff' ><button className='addhandleee'>+ Service Member register</button></Link>
        <div className='row'>
          <table className='admintable'>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Appointment ID</th>
                <th>Availability</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery, index) => (
                <tr key={delivery._id}>
                  <td>{index + 1}</td>
                  <td>{delivery.name}</td>
                  <td><img src={`http://localhost:8080/images/${delivery.photo}`} alt="Delivery Image" /></td>
                  <td>{delivery.email}</td>
                  <td>{delivery.phone}</td>
                  <td>{delivery.address}</td>
                  <td>{delivery.appointment_id}</td>
                  <td>{delivery.availability.toString()}</td>
                  
                  <td><button onClick={() => handleDelete(delivery._id)} className='DeleteButton'>Delete</button></td>
                  <td><button onClick={() => handleDelete(delivery._id)} className='EditButton'>Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Delivery;