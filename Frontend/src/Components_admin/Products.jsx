import React from 'react';
import plants from '../Image/plants.jpg';
import seeds from '../Image/seeds.jpg';
import fertilizers from '../Image/fertilizers.jpg';
import gifts from '../Image/gifts.jpg';
import herbs from '../Image/herbs.jpg';
import access from '../Image/access.jpg';
import { Link } from 'react-router-dom';
import './Products.css';
import Nav2 from './navproduct';

const Orders=()=>{
    return(
        <>
        
        <Nav2></Nav2>
           <div className="row rrrr1"> 
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/fertilizers'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={fertilizers} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s9'>Fertilizers</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/seeds'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={seeds} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s9'>Seeds</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/herbs'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={herbs} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s9'>Herbs</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/accesories'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={access} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s9'>Accessories</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/gifts'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={gifts} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s9'>Gifts</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 cccc1'><Link to='/plants'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={plants} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Plants</span></div>
                    </div>
                </Link></div>
           </div>
        </>
    )
}

export default Orders;