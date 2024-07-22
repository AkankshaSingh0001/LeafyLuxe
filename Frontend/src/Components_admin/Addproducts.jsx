
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Addproduct.css';
import Nav2 from './navproduct';
import fertilizers from '../Image/fertilizers.jpg';
import seeds from '../Image/seeds.jpg';
import herbs from '../Image/herbs.jpg';
import access from '../Image/access.jpg';
import gifts from '../Image/gifts.jpg';
import plants from '../Image/plants.jpg';

const Addproducts = () => {
  const [userProduct, setUserProduct] = useState('');

  useEffect(() => {
    // Retrieve vendor's product information from local storage
    const product = localStorage.getItem('logindata');
    setUserProduct(product);
  }, []);

  return (
    <>
      <Nav2 />
      <div className="row r11111">
        {userProduct && (
          <>
            {userProduct.includes('fertilizer') && (
              <div className="col-lg-4 col-md-4 col-sm-6 cc1">
                <Link to="/addfertilizers">
                  <div className="row">
                    <div className="col-12 cc2"><img src={fertilizers} className="img" alt="Fertilizers"/></div>
                    <div className="col-12 cc3"><span className="s">Fertilizers</span></div>
                  </div>
                </Link>
              </div>
            )}
            {userProduct.includes('seeds') && (
              <div className="col-lg-4 col-md-4 col-sm-6 cc1">
                <Link to="/addseeds">
                  <div className="row">
                    <div className="col-12 cc2"><img src={seeds} className="img" alt="Seeds"/></div>
                    <div className="col-12 cc3"><span className="s">Seeds</span></div>
                  </div>
                </Link>
              </div>
            )}
            {userProduct.includes('herbs') && (
              <div className="col-lg-4 col-md-4 col-sm-6 cc1">
                <Link to="/addherbs">
                  <div className="row">
                    <div className="col-12 cc2"><img src={herbs} className="img" alt="Herbs"/></div>
                    <div className="col-12 cc3"><span className="s">Herbs</span></div>
                  </div> 
                </Link>
              </div>
            )}
            {userProduct.includes('accesories') && (
              <div className="col-lg-4 col-md-4 col-sm-6 cc1">
                <Link to="/addaccessories">
                  <div className="row">
                    <div className="col-12 cc2"><img src={access} className="img" alt="Accessories"/></div>
                    <div className="col-12 cc3"><span className="s">Accessories</span></div>
                  </div>
                </Link>
              </div>
            )}
            {userProduct.includes('gifts') && (
              <div className="col-lg-4 col-md-4 col-sm-6 cc1">
                <Link to="/addgifts">
                  <div className="row">
                    <div className="col-12 cc2"><img src={gifts} className="img" alt="Gifts"/></div>
                    <div className="col-12 cc3"><span className="s">Gifts</span></div>
                  </div>
                </Link>
              </div>
            )}
            {userProduct.includes('plants') && (
              <div className="col-lg-4 col-md-4 col-sm-6 c11">
                <Link to="/addplants">
                  <div className="row">
                    <div className="col-12 cc2"><img src={plants} className="img" alt="Plants"/></div>
                    <div className="col-12 cc3"><span className="s">Plants</span></div>
                  </div>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Addproducts;



