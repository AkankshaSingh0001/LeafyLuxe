import React, { useState } from 'react';
import axios from 'axios';

const AddHerbs = () => {
  const [herb, setHerb] = useState({
    name: '',
    scientific_name: '',
    description: '',
    growing_conditions: {
      temperature: '',
      soil_type: '',
      sunlight: ''
    },
    image: {
      filename: '',
      url: ''
    },
    price: 0,
    city: ''
  });

  const vendorId = localStorage.getItem('logindata');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("image.") || name.startsWith("growing_conditions.")) {
      const [parent, child] = name.split(".");
      setHerb(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      setHerb(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...herb, owner: vendorId };
      await axios.post('http://localhost:8080/addherbs', data);
      alert('Herb added successfully');
      // Reset form after successful submission
      setHerb({
        name: '',
        scientific_name: '',
        description: '',
        growing_conditions: {
          temperature: '',
          soil_type: '',
          sunlight: ''
        },
        image: {
          filename: '',
          url: ''
        },
        price: 0,
        city: ''
      });
    } catch (error) {
      alert('Error adding herb');
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
      <h2 className='headingstyle'>Add Herb</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className="form-group col-12">
          <label>Name:</label>
          <input type="text" name="name" value={herb.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        
        <div className="form-group col-12">
          <label>Description:</label>
          <input type="text" name="description" value={herb.description} onChange={handleChange} className="form-control" placeholder="Description" />
        </div>
        <div className="form-group col-6 ">
          <label>Scientific Name:</label>
          <input type="text" name="scientific_name" value={herb.scientific_name} onChange={handleChange} className="form-control" placeholder="Scientific Name" />
        </div>
        <div className="form-group col-6">
          <label>Temperature:</label>
          <input type="text" name="growing_conditions.temperature" value={herb.growing_conditions.temperature} onChange={handleChange} className="form-control" placeholder="Temperature" />
        </div>
        <div className="form-group col-6">
          <label>Soil Type:</label>
          <input type="text" name="growing_conditions.soil_type" value={herb.growing_conditions.soil_type} onChange={handleChange} className="form-control" placeholder="Soil Type" />
        </div>
        <div className="form-group col-6">
          <label>Sunlight:</label>
          <input type="text" name="growing_conditions.sunlight" value={herb.growing_conditions.sunlight} onChange={handleChange} className="form-control" placeholder="Sunlight" />
        </div>
        
        <div className="form-group col-6">
          <label>Image URL:</label>
          <input type="text" name="image.url" value={herb.image.url} onChange={handleChange} className="form-control" placeholder="Image URL" />
        </div>
        <div className="form-group col-6">
          <label>Price:</label>
          <input type="number" name="price" value={herb.price} onChange={handleChange} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group col-6">
          <label>City:</label>
          <input type="text" name="city" value={herb.city} onChange={handleChange} className="form-control" placeholder="City" />
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

export default AddHerbs;