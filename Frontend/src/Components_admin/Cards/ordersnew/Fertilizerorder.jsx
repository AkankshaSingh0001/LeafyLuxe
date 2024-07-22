

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './style.css'
import Nav2 from '../../navproduct';

const OrderPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Retrieve the values from the query parameters
  const name = searchParams.get('name');
  const price = parseFloat(searchParams.get('price')); // Parse price to float
  const manufacturer = searchParams.get('manufacturer');
  const imageUrl = searchParams.get('imageUrl');

  // State for quantity and total amount
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  // Calculate total amount
  const totalAmount = price * quantity;

  // Function to handle placing the order
  const placeOrder = () => {
    // Fetch customer id from local storage (assuming it's stored as 'logindata')
    const logindata = JSON.parse(localStorage.getItem('logindata'));
  const customerId = logindata._id;
    // Create order object to send to backend
    const order = {
      customer: customerId,
      product: name, // Assuming 'name' is the unique identifier for the product
      quantity: quantity,
      totalAmount: totalAmount,
      status: 'Pending' // Initial status
    };

    // Send POST request to backend to save the order
    axios.post( `http://localhost:8080/apiorders`, order)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        alert("Order placed successfully");
          
     
        // You can redirect to a success page or perform any other action upon successful order placement
      })
      .catch(error => {
        console.error('Error placing order:', error);
        // Handle error, display message to user, etc.
      });
  };

  return (
    <>
    <Nav2></Nav2>
      <div className='adminorder'>
        <div className='mindiv'>
            <div className='col-6 adminorderimg'><img src={imageUrl} alt="Product" className="img-fluid" /></div>
            <h3><strong></strong> {name}</h3><br></br>
            <strong>Price:</strong> Rs. {price}<br></br>
            <strong>Manufacturer:</strong> {manufacturer}<br></br>
            {/* Quantity selection */}
             <div className="mb-3">                 <label htmlFor="quantity" className="form-label">Quantity:</label>
                 <input type="number" id="quantity" className="form-control" value={quantity} onChange={handleQuantityChange} />
               </div>

               {/* Total amount */}
               <div className="mb-3">
                 <strong>Total Amount:</strong> Rs. {totalAmount}
               </div>
               {/* Order button */}
             <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>
        </div>
        <div></div>

      </div>
    </>
  );
};

export default OrderPage;


// {/* <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center">Order Details</h2>
//               <div className="mb-3">
//                 
//               </div>
//               <div className="mb-3">
//                 <strong>Price:</strong> Rs. {price}
//               </div>
//               <div className="mb-3">
//                 
//               </div>
//     

//               {/* Quantity selection */}
//               <div className="mb-3">
//                 <label htmlFor="quantity" className="form-label">Quantity:</label>
//                 <input type="number" id="quantity" className="form-control" value={quantity} onChange={handleQuantityChange} />
//               </div>

//               {/* Total amount */}
//               <div className="mb-3">
//                 <strong>Total Amount:</strong> Rs. {totalAmount}
//               </div>

//               {/* Order button */}
//               <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//  */}
