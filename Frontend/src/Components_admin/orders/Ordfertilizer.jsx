// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Order.css';  // Import CSS file for styling

// function VendorList() {
//   const [vendors, setVendors] = useState([]);

//   useEffect(() => {
//     const fetchVendors = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/order', {
//           params: {
//             product: 'fertilizer'
//           }
//         });
//         setVendors(response.data);
//       } catch (error) {
//         console.error('Error fetching vendors:', error);
//       }
//     };

//     fetchVendors();
//   }, []);

//   return (
//     <div className="vendor-container">
//       <h2>List of Vendors</h2>
//       <div className="vendor-grid">
//         {vendors.map(vendor => (
//           <div key={vendor._id} className="vendor-card">
//             <img src={vendor.photo} alt={vendor.vname} className="vendor-image" />
//             <div className="vendor-info">
//               <h3>{vendor.vname}</h3>
//               <p>Email: {vendor.email}</p>
//               <p>Phone: {vendor.phone}</p>
//               <p>Product: {vendor.product}</p>
//               {/* Add more vendor details as needed */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VendorList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './Order.css';
import './Orderproduct.css'

function VendorList() {
  const [vendors, setVendors] = useState([]);
  //const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/order', {
          params: {
            product: 'fertilizer'
          }
        });
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  const handleOrderClick = (vendorId) => {
    // Navigate to the new page with vendorId as URL parameter
    window.location.href=`/fertilizerorder/${vendorId}`;
  };

  return (
    <div className="vendor-container">
      <h2>List of Vendors</h2>
      <div className="vendor-grid">
        {vendors.map(vendor => (
          <div key={vendor._id} className="vendor-card">
            <img src={`http://localhost:8080/images/${vendor.photo}`} alt={vendor.vname} className="vendor-image" />
            <div className="vendor-info">
              <h3>{vendor.vname}</h3>
              <p>Email: {vendor.email}</p>
              <p>Phone: {vendor.phone}</p>
              <p>Product: {vendor.product}</p>  
              <div className='buttons'><button onClick={() => handleOrderClick(vendor._id) }  className='edit'>Order</button></div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default VendorList;

