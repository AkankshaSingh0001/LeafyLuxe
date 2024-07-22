import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.css';
import Nav2 from '../Nav2';
import Nav1 from '../Nav1';
import { Link } from 'react-router-dom';

const detail=()=>{

    const { id } = useParams(); // Extract the id from the URL

    const [Fertilizer, setFertilizer] = useState(null);
    const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  // Calculate total amount
 

    useEffect(() => {
        console.log('Fetching fertilizer details for ID:', id);
        axios.get(`http://localhost:8080/cosdetfer/${id}`)
          .then(response => {
            console.log('Response:', response.data);
            setFertilizer(response.data);
          })
          .catch(error => {
            console.error('Error fetching accessory details:', error);
          });
      }, [id]);// Fetch data whenever the id changes

      if (!Fertilizer) {
        return <div>Loading...</div>;
      }

      const isLoggedIn = localStorage.getItem('logindata');

    const handleBookNow = () => {
      if (isLoggedIn) {
        const logindata = JSON.parse(localStorage.getItem('logindata'));
        const customerId = logindata._id;
          // Create order object to send to backend
          const order = {
            customer: customerId,
            product: id, // Assuming 'name' is the unique identifier for the product
            quantity: quantity,
            totalAmount: totalAmount,
            status: 'Pending', // Initial status
            name: name,
            description:manufacturer,
            url: image.url,
            cp: costp
            
          };
      
          // Send POST request to backend to save the order
          axios.post( `http://localhost:8080/apicusorders`, order)
            .then(response => {
              console.log('Order placed successfully:', response.data);
              alert("Order placed successfully");
                
           
              // You can redirect to a success page or perform any other action upon successful order placement
            })
            .catch(error => {
              console.error('Error placing order:', error);
              // Handle error, display message to user, etc.
            });
        window.location.href = '#';
      } else {
        // If user is not logged in, redirect to '/login'
        window.location.href = '/login';
      }
    };


      const { price, name,quantityy,type, image,manufacturer,city,nutrient_content,cp} = Fertilizer;

      const totalAmount = price * quantity;
      const costp=cp*quantity

    return(
        <>
            <Nav1></Nav1>
        <Nav2></Nav2>
        <div className='external'>
            <div className='row'>
                <div className='col-6'><div className='detailimg'><img src={image.url} height={500} width={500}></img></div></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-12'>
                            <b><span>{name}</span></b><br></br>
                            <span>{type}</span><br></br><br></br>
                            <span className='accprice'>Rs. {price}</span><br></br><br></br>
                        </div>
                        <b><span>More Details</span></b><br></br>
                        <div className='col-12'>
                           Nutritional Content: <span>{nutrient_content.nitrogent}</span><br></br>
                            Menufacturar: <span>{manufacturer}</span><br></br><br></br>
                        </div>
                        <b><span>Delivery Details</span></b><br></br><br></br><br></br>
                        <div className='col-12 detaildel'>
                            <div>
                                <i class="fa-solid fa-truck-fast"></i>
                                <span>Express Delivery</span><br></br>
                            </div>
                            <div>
                                <i class="fa-solid fa-rotate-left"></i>
                                <span>Easy Return</span><br></br>
                            </div>
                            <div>
                                <i class="fa-solid fa-indian-rupee-sign"></i>
                                <span>Cash on Delivery</span><br></br>
                            </div>
                        </div>
                        <div className="mb-3">                 <label htmlFor="quantity" className="form-label">Quantity:</label>
                 <input type="number" id="quantity" className="form-control" value={quantity} onChange={handleQuantityChange} />
               </div>

               {/* Total amount */}
               <div className="mb-3">
                 <strong>Total Amount:</strong> Rs. {totalAmount}
               </div>
               <Link to="/orderplaced"><button className='indibyn' onClick={handleBookNow}>GET</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default detail