import React from 'react';
import plants from '../Image/plants.jpg';
import seeds from '../Image/seeds.jpg';
import fertilizers from '../Image/fertilizers.jpg';
import gifts from '../Image/gifts.jpg';
import herbs from '../Image/herbs.jpg';
import access from '../Image/access.jpg';
import { Link } from 'react-router-dom';
import './Venderproducts.css';
import Nav2 from '../Components_admin/navproduct';


const Orders=()=>{
    return(
        <>
        <Nav2></Nav2><br></br>
           <div className="row rrrr1"> 
                {/* <div className='col-lg-2 col-md-3 col-sm-4 cccc1 extra'><Link to='/Vfertilizers'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={fertilizers} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Fertilizers</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 c1'><Link to='/Vseeds'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={seeds} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Seeds</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 c1'><Link to='/Vherbs'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={herbs} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Herbs</span></div>
                    </div>
                </Link></div>
                <div className='col-lg-2 col-md-3 col-sm-4 c1'><Link to='/Vaccesories'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={access} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Accessories</span></div>
                    </div>
                </Link></div> */}
                {/* <div className='col-lg-2 col-md-3 col-sm-4 c1'><Link to='/Vgifts'>
                    <div className='row'>
                        <div className='col-12 cccc2'><img src={gifts} className='mgmmm'></img></div>
                        <div className='col-12 cccc3'><span className='s'>Gifts</span></div>
                    </div>
                </Link></div> */}
                <div className='col-lg-2 col-md-3 col-sm-4 c1'><Link to='/Vplants'>
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