import React, { useState } from 'react';
import axios from 'axios';

const AddPlants = () => {
  const [plant, setPlant] = useState({
    name: '',
    description: '',
    price: 0,
    core_instructions: '',
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
      setPlant(prevState => ({
        ...prevState,
        image: {
          ...prevState.image,
          [field]: value
        }
      }));
    } else {
      setPlant(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...plant, owner: vendorId };
      await axios.post('http://localhost:8080/addplants', data);
      alert('Plant added successfully');
      // Reset form after successful submission
      setPlant({
        name: '',
        description: '',
        price: 0,
        core_instructions: '',
        image: {
          filename: '',
          url: ''
        },
        manufacturer: '',
        city: ''
      });
    } catch (error) {
      alert('Error adding plant');
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
      <h2 className='headingstyle'>Add Plant</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className="form-group col-12">
          <label>Name:</label>
          <input type="text" name="name" value={plant.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group col-12">
          <label>Description:</label>
          <input type="text" name="description" value={plant.description} onChange={handleChange} className="form-control" placeholder="Description" />
        </div>
        <div className="form-group col-6">
          <label>Price:</label>
          <input type="number" name="price" value={plant.price} onChange={handleChange} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group col-6">
          <label>Core Instructions:</label>
          <input type="text" name="core_instructions" value={plant.core_instructions} onChange={handleChange} className="form-control" placeholder="Core Instructions" />
        </div>
        
        <div className="form-group col-6">
          <label>Image URL:</label>
          <input type="text" name="image.url" value={plant.image.url} onChange={handleChange} className="form-control" placeholder="Image URL" />
        </div>
        <div className="form-group col-6">
          <label>Manufacturer:</label>
          <input type="text" name="manufacturer" value={plant.manufacturer} onChange={handleChange} className="form-control" placeholder="Manufacturer" />
        </div>
        <div className="form-group col-6">
          <label>City:</label>
          <input type="text" name="city" value={plant.city} onChange={handleChange} className="form-control" placeholder="City" />
        </div>
        <div className='row'>
          <div className='col-5'></div>
          <button type="submit" className="btn btn-primary btn33 col-2">Add Product</button>
          <div className='col-5'></div>
        </div>
      </form>
    </div>
    </div>
    <div className='col-2'></div>
    </div>
    </section>
    </>
  );
};

export default AddPlants;