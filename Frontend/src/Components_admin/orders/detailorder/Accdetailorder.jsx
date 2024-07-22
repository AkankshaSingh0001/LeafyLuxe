import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({}); // State to manage the order quantity for each product
  const { vendorId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/orderacc/${vendorId}`);  
        setProducts(response.data);
        // Initialize order state with default quantity of 0 for each product
        const initialOrder = {};
        response.data.forEach(product => {
          initialOrder[product.id] = 0;
        });
        setOrder(initialOrder);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [vendorId]);

  const handleQuantityChange = (productId, newQuantity) => {
    setOrder(prevOrder => ({
      ...prevOrder,
      [productId]: newQuantity
    }));
  };

  const calculateSubtotal = (product) => {
    return product.price * order[product.id];
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Product Details</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>
                <button className="btn btn-sm btn-outline-info mr-2" onClick={() => handleQuantityChange(product.id, Math.max(0, order[product.id] - 1))}>-</button>
                {order[product.id]}
                <button className="btn btn-sm btn-outline-info ml-2" onClick={() => handleQuantityChange(product.id, order[product.id] + 1)}>+</button>
              </td>
              <td>₹{calculateSubtotal(product)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetails;