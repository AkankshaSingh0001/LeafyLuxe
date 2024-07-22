import React, { useState } from 'react';
import axios from 'axios';
import './Addp.css';

const AddAccessories = () => {
  const [accessory, setAccessory] = useState({
    name: '',
    description: '',
    price: 0,
    material: '',
    image: {
      filename: '',
      url: ''
    },
    manufacturer: '',
    city: ''
  });

  const vendorId = localStorage.getItem('logindata');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("image.")) {
      const field = name.split(".")[1];
      setAccessory(prevState => ({
        ...prevState,
        image: {
          ...prevState.image,
          [field]: value
        }
      }));
    } else {
      setAccessory(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...accessory, owner: vendorId };
      await axios.post('http://localhost:8080/addaccessories',data);
      alert('Accessory added successfully');
      // Reset form after successful submission
      setAccessory({
        name: '',
        description: '',
        price: 0,
        material: '',
        image: {
          filename: '',
          url: ''
        },
        manufacturer: '',
        city: ''
      });
    } catch (error) {
      alert('Error adding accessory');
      console.error(error);
    }
  };

  return (
    <>
    <section>
    <div className="start">
    
    
    <div className='row'>
    <div className='col-2'></div>
    <div className='col-8'>
      <h3 className='headingstyle'>Add Accessories</h3>
      <form onSubmit={handleSubmit} className="needs-validation row" noValidate>
        <div className="form-group col-12">
          <label>Name:</label>
          <input type="text" name="name" value={accessory.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group col-12">
          <label>Description:</label>
          <input type="text" name="description" value={accessory.description} onChange={handleChange} className="form-control" placeholder="Description" />
        </div>
        <div className="form-group col-6">
          <label>Price:</label>
          <input type="number" name="price" value={accessory.price} onChange={handleChange} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group col-6">
          <label>Material:</label>
          <input type="text" name="material" value={accessory.material} onChange={handleChange} className="form-control" placeholder="Material" />
        </div>
        
        <div className="form-group col-6">
          <label>Image URL:</label>
          <input type="text" name="image.url" className="form-control" placeholder="Image URL" onChange={handleChange}/>
        </div>
        <div className="form-group col-6">
          <label>Manufacturer:</label>
          <input type="text" name="manufacturer" value={accessory.manufacturer} onChange={handleChange} className="form-control" placeholder="Manufacturer" />
        </div>
        <div className="form-group col-6">
          <label>City:</label>
          <input type="text" name="city" value={accessory.city} onChange={handleChange} className="form-control" placeholder="City" />
        </div>
        <div className='row'>
          <div className='col-5'></div>
          <button type="submit" className="btn btn-primary btn33 col-2">Add Product</button>
          <div className='col-5'></div>
        </div>      </form>
      </div>
      </div>
      <div className='col-2'></div>
      
    </div>
    
    </section>
    </>
  );
};

export default AddAccessories;
