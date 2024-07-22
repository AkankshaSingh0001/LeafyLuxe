import React from 'react';
import './style.css';
import axios from 'axios';

const FertilizerCard = ({ fertilizer }) => {

const { price, name, image,manufacturer,available} = fertilizer;

const handleEditClick = () => {
  // Navigate to the edit page with the fertilizerId
  window.location.href = `/cosdetfer/${fertilizer._id}`;
};

  return (
    <>
        <div className='col-lg-3 col-md-4 col-sm-6 box111'>
            <div className='Fr111'>
                <div className='c111'><img src={image.url} alt={image.filename} className='img2'/></div>
                <div className='c222'>
                    <br></br><b><h5 className='mm111'>{name}</h5></b>
                    <p><b>Rs. {price}</b></p>
                    <p className='out'>{available ? ' ' : 'OUT OF STOCK'}</p>
                        {available ? <button onClick={handleEditClick} className='buy'>Buy Now</button> : ' '}
                </div>
            </div>
            
        </div>
    </>
  );
};

export default FertilizerCard;


