import React from 'react';
import plants from './Image/plants.jpg';
import seeds from './Image/seeds.jpg';
import fertilizers from './Image/fertilizers.jpg';
import gifts from './Image/gifts.jpg';
import herbs from './Image/herbs.jpg';
import access from './Image/access.jpg';
import { Link } from 'react-router-dom';
import './Order.css';
import Nav2 from '../navproduct';

const Orders=()=>{
    return(
        <>
        
        <Nav2></Nav2>
           <div className="row r11111"> 
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/fertilizers'>
                    <div className='row'>
                        <div className='col-12 cc2'><img src={fertilizers} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Fertilizers</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/seeds'>
                    <div className='row'>
                        <div className='col-12 cc2'><img src={seeds} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Seeds</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/herbs'>
                    <div className='row'>
                        <div className='col-12 cc2'><img src={herbs} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Herbs</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/accesories'>
                    <div className='row'>
                        <div className='col-12 cc2'><img src={access} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Accessories</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/gifts'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={gifts} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Gifts</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cc1'><Link to='/plants'>
                    <div className='row'>
                        <div className='col-12 cc2'><img src={plants} className='imgmmm'></img></div>
                        <div className='col-12 cc3'><span className='s'>Plants</span></div>
                    </div>
                </Link></div>
           </div>
        </>
    )
}

export default Orders;

