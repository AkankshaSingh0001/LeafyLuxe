import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.css';
import Nav2 from '../Nav2';
import Nav1 from '../Nav1'; 
import { Link } from 'react-router-dom';

const AccessoryDetail = () => {

  const [accessory, setAccessory] = useState(null);
  
  const { id } = useParams(); // Extract the id from the URL



  const isLoggedIn = localStorage.getItem('logindata');

    const handleBookNow = () => {
      if (isLoggedIn) {
        const logindata = JSON.parse(localStorage.getItem('logindata'));
        const customerId = logindata._id;
          // Create order object to send to backend
          const order = {
            customer: customerId,
            product: id, // Assuming 'name' is the unique identifier for the product
            quantity: "1",
            totalAmount: price,
            status: 'Pending', // Initial status
            name: name,
            description:description,
            url: image.url
            
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
        
      }else{
        window.location.href = '/login';
      }
    };


  

  useEffect(() => {
    console.log('Fetching accessory details for ID:', id);
    axios.get(`http://localhost:8080/cosdetass/${id}`)
      .then(response => {
        console.log('Response:', response.data);
        setAccessory(response.data);
      })
      .catch(error => {
        console.error('Error fetching accessory details:', error);
      });
  }, [id]);// Fetch data whenever the id changes

  if (!accessory) {
    return <div>Loading...</div>;
  }

  const { price, name, image, description,material,manufacturer,city} = accessory;

  return (
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
                            <span>{description}</span><br></br><br></br>
                            <span className='accprice'>Rs. {price}</span><br></br><br></br>
                        </div>
                        <b><span>More Details</span></b><br></br>
                        <div className='col-12'>
                            Material Used: <span>{material}</span><br></br>
                            Manufaturar: <span>{manufacturer}</span><br></br><br></br>
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
                        <Link to="/orderplaced"><button className='indibyn'  onClick={handleBookNow}>GET</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AccessoryDetail;