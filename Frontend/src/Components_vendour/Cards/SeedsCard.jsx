import React, { useState } from 'react';
import './style.css'; 
import axios from 'axios';

const SeedsCard=({seed})=>{
  

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:8080/seeds/${seed._id}`);
          window.location.href='/seeds';

          
        } catch (error) {
          console.error('Error deleting seed:', error);
          
        }
      };

      const handleEditClick = () => {
        // Navigate to the edit page with the fertilizerId
        window.location.href = `/editseeds/${seed._id}`;
      };
      
      const { price, name, image,manufacturer} = seed;

      return (
        <>
            <div className='col-lg-3 col-md-4 col-sm-6 box'>
                <div className='Fr1'>
                    <div className='c11'><img src={image.url} alt={image.filename} className='img2'/></div>
                    <div className='c22'>
                        <br></br><b><h5 className='mm'>{name}</h5></b>
                        <p><b>Rs. {price}</b></p>
                        <p>Seller:{manufacturer}</p>
                        <div className='buttons'>
                          <button onClick={handleDelete} className='del'>Delete</button>
                          <button onClick={handleEditClick} className='edit'>Edit</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
      );
}

export default SeedsCard;


