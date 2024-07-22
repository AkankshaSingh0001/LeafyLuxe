import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Vlist.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function VendorList() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/vendorslist')
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error('Error fetching vendors:', error);
      });
  }, []);
  

  const handleDelete = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8080/vendourdelete/${vendorId}`);
       window.location.href='/vlist';    
    } catch (error) {
      console.error('Error deleting fertilizer:', error);
      
    }
  };
  return (
    <div className="vendor-container">
      <h2>List of Vendors</h2>
      <button><Link to='/regvendour'>Register</Link></button>
      <div className="vendor-grid">
        {vendors.map(vendor => (
          <div key={vendor._id} className="vendor-card">
            <img src={`http://localhost:8080/images/${vendor.photo}`} alt={vendor.vname} className="vendor-image" />
            <div className="vendor-info">
              <h3>{vendor.vname}</h3> 
              <p>Email: {vendor.email}</p>
              <p>Phone: {vendor.phone}</p>
              <p>Product: {vendor.product}</p>
              <div className='buttons'><button onClick={() => handleDelete(vendor._id) }  className='edit'>Delete</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorList;