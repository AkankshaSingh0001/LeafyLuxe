import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminSeeCusorderShow.css';
import Nav from './navproduct';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {


    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:8080/seecusorders');
        setOrders(response.data);
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

  const formatCreatedAt = (createdAt) => {
    try {
      // Assuming createdAt is in ISO date format
      const date = new Date(createdAt);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    } catch (error) {
      console.error('Error parsing date:', error);
      return "Invalid Date";
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    // Update the order status in the backend
    axios.put(`http://localhost:8080/statuseditt/${orderId}`, { status: newStatus })
      .then(response => {
        // Update the local orders state with the updated order
        const updatedOrders = orders.map(order => {
          if (order._id === orderId) {
            return { ...order, status: newStatus };
          }
          return order;
        });
        setOrders(updatedOrders);
      })
      .catch(error => {
        console.error('Error updating order status:', error);
      });
  };

  return (
    <>
      <Nav></Nav><br></br>
      <div className="allorderadmin">
      <h1 className="mb-4">All Orders</h1>
      <table className="">
        <thead>
          <tr className='allorderadmintr'>
            <th>Order ID</th>
            <th>Customer Name</th>
            
            <th>Image</th>
            <th> Product Name</th>
            <th>Email</th>
            <th>Order Date</th>
            <th>Phone Number</th>
            <th>Product Id</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Confirm</th>
            
          </tr>
        </thead>
        <tbody>
          {orders.map(({ order, customer }) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <img height={100} width={100} src={order.url}></img>
              <td>{order.name}</td>
              <td>{customer.email}</td>
              <td>{formatCreatedAt(order.createdAt)}</td>
              <td>{customer.phoneNumber}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.totalAmount}</td>
              <td>{order.status}</td>
              <td>
                {order.status === 'Pending' && (
                  <button onClick={() => handleStatusChange(order._id, 'Shipped')}>
                    Shipping
                  </button>
                )}
              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Orders;
