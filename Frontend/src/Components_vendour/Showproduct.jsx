import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Showproduct.css'
import Nav from './Vnav';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = () => {
      // Retrieve user data from local storage
      const uid = JSON.parse(localStorage.getItem('logindata'));
      setUserData(uid);
      return uid;
    };

    const fetchProducts = async () => {
      try {
        const uid = fetchUserData();

        // Fetch products based on user ID
        const response = await axios.get(`http://localhost:8080/showvendourproducts/${uid._id}`, {
          params: { productType: uid.product } // Assuming productType is a property in uid
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }; 

    fetchProducts();
  }, []);

  return (
    <>
    <Nav></Nav>
      <div className="">
      <div className="row">
        {products.map(product => (
          <div key={product._id} className="col-4">
            <div className="vs">
              <img src={product.image.url} className="cardv" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductList;
