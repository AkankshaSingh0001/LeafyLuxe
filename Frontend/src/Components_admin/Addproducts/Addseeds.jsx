import React, { useState } from 'react';
import axios from 'axios';

const Addseeds = () => {
  const [seeds, setSeeds] = useState({
    name:'',
    description:'',
    price:0,
    planting_instructions:'',
    image:{
       url: '',
    },
    manufacturer:'',
    city : '',
    },
  );

  const vendorId = localStorage.getItem('logindata');

  const handleChange = (e) => {
    const { name, value } = e.target;

   
     if (name.startsWith("image.")) {
      const field = name.split(".")[1];
      setSeeds(prevState => ({
        ...prevState,
        image: {
          ...prevState.image,
          [field]: value
        }
      }));
    } else {
      setSeeds(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...seeds, owner: vendorId };
      await axios.post('http://localhost:8080/addseeds', data);
      alert('Fertilizer added successfully');
      // Reset form after successful submission
      setSeeds({
        name:'',
    description:'',
    price:0,
    planting_instructions:'',
    image:{
       url: '',
    },
    manufacturer:'',
    city : '',
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
      <h2 className='headingstyle'>Add Seeds</h2>
      <form onSubmit={handleSubmit} className='row'>
        <div className="form-group col-12">
          <label>Name:</label>
          <input type="text" name="name" value={seeds.name} onChange={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="form-group col-12">
          <label>Discription</label>
          <input type="text" name="description" value={seeds.description} onChange={handleChange} className="form-control" placeholder="description" />
        </div>
        <div className="form-group col-6">
          <label>Price:</label>
          <input type="number" name="price" value={seeds.price} onChange={handleChange} className="form-control" placeholder="Price" />
        </div>
        <div className="form-group col-6">
          <label>Planting instruction</label>
          <input type="text" name="planting_instructions" value={seeds. planting_instructions} onChange={handleChange} className="form-control" placeholder="planting_instructions" />
        </div>
        <div className="form-group col-6">
          <label>Image Link:</label>
          <input type="text" name="image.url" value={seeds.image.url} onChange={handleChange} className="form-control" placeholder="Image Link" />
        </div>
        <div className="form-group col-6">
          <label>manufacturer</label>
          <input type="text" name="manufacturer" value={seeds.manufacturer} onChange={handleChange} className="form-control" placeholder="Manufacturer" />
        </div>
        <div className="form-group col-6">
          <label>City</label>
          <input type="text" name="city" value={seeds.city} onChange={handleChange} className="form-control" placeholder="city" />
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

export default Addseeds;


