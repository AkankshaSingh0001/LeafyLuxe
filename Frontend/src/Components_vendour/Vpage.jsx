

import React from 'react';
import Vnav from './Vnav.jsx';
import { Link } from 'react-router-dom';
import './Vpage.css';

const Vpage = () => {
    const buttons = [
        {
            title: "+ ADD PRODUCT",
            description: "Click here to add a new product",
            link: "/addproducts"
        },
        {
            title: "SHOW PRODUCTS",
            description: "View all existing products",
            link: "/showproducts"
        },
        {
            title: "EDIT/DELETE",
            description: "UPDATE existing products",
            link: "/venderproducts"
        }
    ];
 
    return (
        <>
            <Vnav />
            
            <div className='card-container'>
                {buttons.map((button, index) => (
                    <div className='card md-card' key={index}>
                        <div className='card-body'>
                            <h5 className='card-title'>{button.title}</h5>
                            <p className='card-text'>{button.description}</p>
                            <Link to={button.link} className='btn btn-primary'>Go</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Vpage;