import React from 'react';
import './style.css';
import axios from 'axios';
import Nav from '../Vnav';


const PlantsCard=({plant})=>{

    const handleDelete = async () => {
        try {
          await axios.delete(`http://localhost:8080/plants/${plant._id}`);
          window.location.href='/plants';

         
          
        } catch (error) {
          console.error('Error deleting plant:', error);
          
        }
      };

      const handleEditClick = () => {
        // Navigate to the edit page with the fertilizerId
        window.location.href = `/editplants/${plant._id}`;
      };

    const { price, name, image,manufacturer} = plant;
  return (
    <>
        
        <div className='col-lg-3 col-md-4 col-sm-6 '>
            <div className='vs'>
                <img src={image.url} alt={image.filename} className='cardv'/>
                <div className='card-body'>
                    <b><h5 className=''>{name}</h5></b>
                    <p><b>Rs. {price}</b></p>
                    <p>Seller:{manufacturer}</p>
                    <div className='veditcard'>
                      <button onClick={handleDelete} className='del'>Delete</button>
                      <button onClick={handleEditClick} className='edit'>Edit</button>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  );
}

export default PlantsCard;



