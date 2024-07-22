import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav1 from './Nav1';
import './Seecusorders.css'
import Nav2 from './Nav2';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        // Fetch the customer ID from localStorage
        const logindata= JSON.parse(localStorage.getItem('logindata'));
        const customerId =logindata._id;
        if (!customerId) {
          throw new Error('Customer ID not found in localStorage.');
        }

        // Fetch customer orders based on the customer ID
        const response = await axios.get(`http://localhost:8080/seecusorderss/${customerId}`);
        setOrders(response.data.orders);
        setCustomer(response.data.customer);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders. Please try again later.');
        setLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Nav1></Nav1><Nav2></Nav2>
      <div className="container">
      <ul className="list-group">
        {orders.map(order => (
          <li key={order._id} className="list-group-item myordercus">
            <div className='row'>
              <div className='col-4'>
                <img src={order.url} height={200} width={250}></img>
              </div>
              <div className='col-8'>
                  <span>{order._id}</span><br></br>
                  <strong><span>{order.name}</span><br></br></strong>
                  <span>{order.description}</span><br></br>
                  <p><strong>Quantity:</strong> {order.quantity}</p>
                  <p><strong>Total Amount:</strong> {order.totalAmount}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  
                  
              </div>
            </div>
            {/* You can add more order details here */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Orders;
