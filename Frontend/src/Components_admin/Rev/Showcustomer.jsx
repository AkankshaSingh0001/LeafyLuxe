import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../handle_admins.css'; // Assuming you have some CSS for styling
import Nav from '../navproduct';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getCustomers'); // Adjust the URL according to your backend route
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <>
      <Nav /><br></br><br></br>
    <div className="row">
      <table className='admintable'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Address</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
          </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id}>
              <td>{index + 1}</td>
              <td>{`${customer.firstName} ${customer.lastName}`}</td>
              <td><img src={`http://localhost:8080/images/${customer.photo}`} alt="Article Image" height={130} width={130}/></td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.DOB}</td>
              <td>{customer.gender}</td>
              <td>{customer.address}</td>
              <td>{customer.city}</td>
              <td>{customer.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default CustomerList;
