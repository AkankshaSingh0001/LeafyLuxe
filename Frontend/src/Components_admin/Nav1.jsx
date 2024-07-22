import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Nav.css';
import logo from "../Image/logo2.webp";


const Nav1=()=>{

    const logout=()=>{
        localStorage.clear();
    }

    return(
        <>
            <div className='nav11'>
                        <div className='row rb'>
                            <div className='col-12 logop'>
                            <div ><Link to='/'><img src={logo} height={150} className='logo'></img></Link></div>
                            </div>
                            <div className='listings'>
                                <div className='col-12 p'><Link to='/products' className='lcol'>Products</Link></div>
                                <div className='col-12 p'><Link to='/showorder' className='lcol'>My Orders</Link></div>
                                <div className='col-12 p'><Link to='/customerview' className='lcol'>View Customers</Link></div>
                                <div className='col-12 p'><Link to='/admin/handle_servicestaff' className='lcol'>Service Team</Link></div>
                                <div className='col-12 p'><Link to='/vlist' className='lcol'>Venders</Link></div>
                                <div className='col-12 p'><Link to='/admin/handle_delivery' className='lcol'>Delivery Team</Link></div>
                                <div className='col-12 p'><Link to='/allapp' className='lcol'>Appointments</Link></div>
                                <div className='col-12 p'><Link to='/showreview' className='lcol'><span>Reviews</span></Link></div>
                                <div className='col-12 p'><Link to='/AdminCusOrder' className='lcol'>Customer Orders</Link></div>
                                <div className='col-12 p'><Link to='/admin/handle_admin' className='lcol'>Handle admins</Link></div>
                                <div className='col-12 p'><Link to='/adminprofile' className='lcol'><span>Profile</span></Link></div>
                                <div className='col-12 p'><Link to='/admin/new_admin' className='lcol'>Add Admin</Link></div>
                                <div className='col-12 p'><Link to='/' className='lcol' onClick={logout}>LogOut</Link></div>

                            </div>
                        </div>
                    </div>

        </>
    )
}

export default Nav1;



        