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

const Products=()=>{
    return(
        <>
        
        <Nav2></Nav2>
           <div className="row r1"> 
                <div className='col-lg-4 col-md-4 col-sm-6 cc1'><Link to='/Vfertilizers'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={fertilizers} className='imgkkk' height={300} width={300}></img></div>
                        <div className='col-12 cc3'><span className='s'>Fertilizers</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-4 col-md-4 col-sm-6 cc1'><Link to='/Vseeds'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={seeds} className='imgkkk'></img></div>
                        <div className='col-12 cc3'><span className='s'>Seeds</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-4 col-md-4 col-sm-6 cc1'><Link to='/Vherbs'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={herbs} className='imgkkk'></img></div>
                        <div className='col-12 cc3'><span className='s'>Herbs</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-4 col-md-4 col-sm-6 cc1'><Link to='/Vaccesories'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={access} className='imgkkk'></img></div>
                        <div className='col-12 cc3'><span className='s'>Accessories</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-4 col-md-4 col-sm-6 cc1'><Link to='/Vgifts'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={gifts} className='imgkkk'></img></div>
                        <div className='col-12 cc3'><span className='s'>Gifts</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-4 col-md-2 cc1'><Link to='/Vplants'>
                    <div className='row r2'>
                        <div className='col-12 cc2'><img src={plants} className='imgkkk'></img></div>
                        <div className='col-12 cc3'><span className='s'>Plants</span></div>
                    </div>
                </Link></div>
           </div>
        </>
    )
}

export default Products;
