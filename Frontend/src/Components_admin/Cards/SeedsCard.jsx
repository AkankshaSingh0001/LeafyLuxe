
import React, { useState } from 'react';
import axios from 'axios';
import './Cardcss.css';


const FertilizerCard = ({  seed}) => {

  
  const { price, name, image, manufacturer, type, available } =  seed;
  const [isAvailable, setIsAvailable] = useState(available);
  const handleOrderClick = () => {
    // Construct the URL with query parameters for fertilizer details and quantity
    const orderUrl = `/orderorderfertilizer?name=${encodeURIComponent(name)}&price=${price}&manufacturer=${encodeURIComponent(manufacturer)}&type=${type}&imageUrl=${encodeURIComponent(image.url)}`;
    // Navigate to the new page
    window.location.href = orderUrl;
  };


  const handleToggleAvailable = async () => {
    try {
      // Make a request to update the availability of the fertilizer
      await axios.patch(`http://localhost:8080/fertilizers/${seed._id}/toggleAvailableseeds`, { available: !isAvailable });
      setIsAvailable(!isAvailable);
    } catch (error) {
      console.error('Error toggling availability of fertilizer:', error);
    }
  };
  
  return (
    <div className='col-md-4 col-sm-6 col-lg-3 adminpro'>
        <div className='adminoverall'>
            <div className='adminproduct-image'>
                <a href='#' className='image'>
                    <img src={image.url} alt={image.filename} className='pic-1' height={280} />
                </a>
                
               
            </div>
            <div className='adminproduct-content'>
            <div className='price'>Rs. {price}</div>
                <h3 className='title'>{name}</h3>
                <p className='manufacturer'>Seller: {manufacturer}</p>
                <p className='type'>Type: {type}</p>
                <button onClick={() => handleOrderClick() } className="btn btn-primary"  >order</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={() => handleToggleAvailable()} className="btn btn-dark avl"> {isAvailable ? 'Mark Unavailable' : 'Mark Available'}</button>
            </div>
        </div>
    </div>
  );
};

export default FertilizerCard;