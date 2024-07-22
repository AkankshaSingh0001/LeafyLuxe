import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Showorder.css';
import Nav from '../navproduct';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend API
    axios.get('http://localhost:8080/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const formatCreatedAt = (createdAt) => {
    try {
      const date = new Date(createdAt);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    } catch (error) {
      console.error('Error parsing date:', error);
      return "Invalid Date";
    }
  };

  const handleStatusChange = (orderId, newStatus) => {
    // Update the order status in the backend
    axios.put(`http://localhost:8080/statusedit/${orderId}`, { status: newStatus })
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
      <Nav />
      <br />
      <div className="showordermmm">
        <h1>Orders</h1>
        <br />
        <table className="">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Order Date</th> {/* New column for order date */}
              <th>Action</th> {/* New column for status change action */}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.totalAmount}</td>
                <td>{order.status}</td>
                <td>{formatCreatedAt(order.createdAt)}</td> {/* Display order date */}
                <td>
                  {order.status === 'Pending' && (
                    <button onClick={() => handleStatusChange(order._id, 'Delivered')}>
                      Confirm Delivery
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
};

export default OrdersPage;
