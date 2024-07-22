import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './navproduct';
import { Link } from 'react-router-dom';
import './handle_staff.css';

const Delivery = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = () => {
    axios.get('http://localhost:8080/getDelivery')
      .then(response => {
        setAdmins(response.data);
      })
      .catch(error => {
        console.error('Error fetching admins:', error);
      });
  };

  const handleDelete = async (adminId) => {
    try {
      await axios.delete(`http://localhost:8080/admins/delivery/${adminId}`);
      fetchAdmins();
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  return (
    <>
      <Nav />
         
        

      <div className=''><br></br>
      <Link to='/regdelivery' ><button className='addhandleee'>+ Delivery Person Register</button></Link>
        <div className='row'><br></br><br></br>
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
                
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin._id}>
                  <td>{index + 1}</td>
                  <td>{admin.name}</td>
                  <td><img src={`http://localhost:8080/images/${admin.photo}`} alt="Admin Image" /></td>
                  <td>{admin.email}</td>
                  <td>{admin.phone}</td>
                  <td>{admin.address}</td>
                  <td>{admin.appointment_id}</td>
                  <td>{admin.availability.toString()}</td>
                  <td><button onClick={() => handleDelete(admin._id)} className='DeleteButton'>Delete</button></td>
                  <td><button onClick={() => handleDelete(admin._id)} className='EditButton'>Edit</button></td>
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