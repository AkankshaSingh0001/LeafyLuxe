import React, { useState } from 'react';
import axios from 'axios';
import './Addp.css';

const Addfertilizer = () => {
  const [fertilizer, setFertilizer] = useState({
    price: 0,
    quantity: 0,
    name: '',
    type: '',
    nutrient_content:{
      nitrogen: 0,
      phosphorous: 0,
      potasium: 0,
    },
    manufacturer: '',
    image:{
      filename:'',
      url:''
    },
  });

  const vendorId = localStorage.getItem('logindata');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("nutrient_content.")) {
      const nutrient = name.split(".")[1];
      setFertilizer(prevState => ({
        ...prevState,
        nutrient_content: {
          ...prevState.nutrient_content,
          [nutrient]: value
        }
      }));
    } else if (name.startsWith("image.")) {
      const field = name.split(".")[1];
      setFertilizer(prevState => ({
        ...prevState,
        image: {
          ...prevState.image,
          [field]: value
        }
      }));
    } else {
      setFertilizer(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...fertilizer, owner: vendorId };
      await axios.post('http://localhost:8080/addfertilizers', data);
            alert('Fertilizer added successfully');
      // Reset form after successful submission
      setFertilizer({
        price: 0,
        quantity: 0,
        name: '',
        type: '',
        nutrient_content: {
          nitrogen: 0,
          phosphorous:0,
          potasium: 0,
        },
        manufacturer: '',
        image:{
          filename: '',
          url: '',
        },
        city: '',
      });
    } catch (error) {
      alert('Error adding fertilizer');
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
      <h3 className='headingstyle'>Add Fertilizer</h3>
      <form onSubmit={handleSubmit} className='row'>
        <div className="form-group col-12">
          <label>Name:</label>
          <input type="text" name="name" value={fertilizer.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group col-12">
          <label>Type:</label>
          <input type="text" name="type" value={fertilizer.type} onChange={handleChange} className="form-control" placeholder="Type" />
        </div>
        <div className="form-group col-4">
          <label>Nitrogen:</label>
          <input type="number" name="nutrient_content.nitrogen" value={fertilizer.nutrient_content.nitrogen} onChange={handleChange} className="form-control" placeholder="Nitrogen" />
        </div>
        <div className="form-group col-4">
          <label>Phosphorus:</label>
          <input type="number" name="nutrient_content.phosphorous" value={fertilizer.nutrient_content.phosphorous} onChange={handleChange} className="form-control" placeholder="Phosphorus" />
        </div>
        <div className="form-group col-4">
          <label>Potassium:</label>
          <input type="number" name="nutrient_content.potasium" value={fertilizer.nutrient_content.potasium} onChange={handleChange} className="form-control" placeholder="Potassium" />
        </div>
        <div className="form-group col-6">
          <label>Price:</label>
          <input type="number" name="price" value={fertilizer.price} onChange={handleChange} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group col-6">
          <label>Quantity:</label>
          <input type="number" name="quantity" value={fertilizer.quantity} onChange={handleChange} className="form-control" placeholder="Quantity" />
        </div>
        
        <div className="form-group col-6">
          <label>Manufacturer:</label>
          <input type="text" name="manufacturer" value={fertilizer.manufacturer} onChange={handleChange} className="form-control" placeholder="Manufacturer" />
        </div>
        <div className="form-group col-6">
          <label>Image Link:</label>
          <input type="text" name="image.url" onChange={handleChange} className="form-control" placeholder="Image Link" />
        </div>
        <div className="form-group col-6">
          <label>City:</label>
          <input type="text" name="city" onChange={handleChange} className="form-control" placeholder="City" />
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

export default Addfertilizer;