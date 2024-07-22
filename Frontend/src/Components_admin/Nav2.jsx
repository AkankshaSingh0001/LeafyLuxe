import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Nav.css';
import logo from "../Image/logo2.webp";


const storedData = JSON.parse(localStorage.getItem("logindata"));


const Nav2=()=>{

    const [showMenu, setShowMenu] = useState(false);

    const logout=()=>{
        localStorage.clear();
    }

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };
    return(
        <>
                    <div className='row rnav2'>
                            <div className='col-2 secret-logo'><Link to='/'><img src={logo} height={50} className='logosec'></img></Link></div>
                            <div className='col-5 '>
                                <form className="d-flex seaech" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className='btn button'>Search</button>
                                </form>
                            </div>
                            <div className='col-3 button'>
                                <button className='btn button'><Link to='/orders' className='lcol'>+ORDER PRODUCT</Link></button>
                            </div>
                            <div className='col-2 iconsec'>
                                <div className='row icons'>
                                    <div className='col-4 color1'><i className="fa-solid fa-message msg"></i></div>
                                    <div className='col-4 color1'><i class="fa-solid fa-shopping-cart" aria-hidden="true"></i></div>
                                    <div className='col-4 color1'><i className="fa-solid fa-moon moon"></i></div>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='row profile'>
                                    <div className='col-3'><div className='imgp'><img src={`http://localhost:8080/images/${storedData.photo}`} alt="Article Image" /></div></div>
                                    <div className='col-6 name'>{storedData.username}</div>
                                    <div className='col-3'>
                                        <i className="fa-solid fa-caret-down" onClick={toggleMenu}></i>
                                                                     
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='main'>
                            <div className=''>
                                <div className='sty'>
                                {showMenu && (
                                        <div className='profile'>
                                        <div className="menu row">
                                            <Link to='/products'className='col-12 prol secretmen'>Products</Link>
                                            <Link to='/showorder'className='col-12 prol secretmen'>My Orders</Link>
                                            <Link to='/customerview' className='col-12 prol secretmen'>View Customers</Link>
                                            <Link to='/admin/handle_servicestaff'className='col-12 prol secretmen'>Service Team</Link>
                                            <Link to='/admin/handle_delivery'className='col-12 prol secretmen'>Delivery Staff</Link>
                                            <Link to='/vlist' className='col-12 prol secretmen' >Venders</Link>
                                            <Link to='/allapp' className='col-12 prol secretmen'>Appointments</Link>
                                            <Link to='/showreview' className='col-12 prol secretmen'>Reviews</Link>
                                            <Link to='/AdminCusOrder' className='col-12 prol secretmen'>Customer Orders</Link>
                                            <Link to='/admin/handle_admin' className='prol  secretmen'>Handle admins</Link>
                                            <Link to='/adminprofile' className='col-12 prol zzzz'>Profile</Link>
                                            <Link className='col-12 prol zzzz' onClick={logout} to='/'>Log Out</Link>
                                            <Link to='/admin/new_admin' className='col-12 prol zzzz'>Add Admin</Link>
                                            {/* Add more menu items as needed */}
                                        </div>
                                        </div>
                                        )}   
                                </div>
                            </div>
                        </div>
    </>
    )

}

export default Nav2;