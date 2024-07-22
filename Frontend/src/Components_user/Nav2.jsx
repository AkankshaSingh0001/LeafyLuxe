import './Nav2.css'

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('logindata'); 
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Your logout logic here
    // For example, clear localStorage and redirect to login page
    localStorage.removeItem('logindata');
    setIsLoggedIn(false);
    // Redirect user to login page
    // Example: window.location.href = '/login';
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const storedData = JSON.parse(localStorage.getItem("logindata"));
  return (
    <nav className="navbar">
      <ul className="left-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul className="right-nav">
        {isLoggedIn ? (
          <>
            <li className='cospro'>
              <div className='row'>
                <div className='col-3'><div className='imgcos'><img src={`http://localhost:8080/images/${storedData.photo}`} alt="" /></div></div>
                <div className='col-6'><span className='namecos'>{storedData.firstName}</span></div>
                <div className='col-3 xx'><i className="fa-solid fa-caret-down downcos" onClick={toggleMenu}></i>
                {isOpen && (
        <div className="cosdropdown-content">
          <a href="/cosprofile" className="cosmenu-item"><span className="cosmenu-item">Profile</span></a>
          <a href="/CusOrderC" className="cosmenu-item"><span className="cosmenu-item">Orders</span></a>
          <a href="/cusappontment" className="cosmenu-item"><span className="cosmenu-item">Appintments</span></a>
        </div>)}
                
                </div>
                
              </div>
            </li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to='/login'>Sign In</Link></li>
            <li><Link to="/regcustomer">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
