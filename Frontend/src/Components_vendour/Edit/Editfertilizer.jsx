import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditFertilizerForm = () => {
    const { id } = useParams(); 
    const [formData, setFormData] = useState({
                price: 0,
                quantity: 0,
                name: '',
                type: '',
                nutrient_content: {
                    nitrogen: 0,
                    phosphorous: 0,
                    potassium: 0
                },
                image: {
                    filename: '',
                    url: ''
                },
                manufacturer: '',
                city: ''
            });
    useEffect(() => {
        axios.get(`http://localhost:8080/fertilizers/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching fertilizer:', error);
            });
    }, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleNutrientChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          nutrient_content: {
            ...formData.nutrient_content,
            [name]: parseFloat(value)
          }
        });
      };

      const handleImageChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          image: {
            ...formData.image,
            [name]: value
          }
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8080/fertilizers/${id}`, formData)
            .then(response => {
                console.log('Fertilizer updated successfully:', response.data);
                
            })
            .catch(error => {
                console.error('Error updating fertilizer:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Type</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Nitrogen Content</label>
                <input type="number" name="nutrient_content.nitrogen" value={formData.nutrient_content.nitrogen} onChange={handleNutrientChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Phosphorous Content</label>
                <input type="number" name="nutrient_content.phosphorous" value={formData.nutrient_content.phosphorous} onChange={handleNutrientChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Potassium Content</label>
                <input type="number" name="nutrient_content.potassium" value={formData.nutrient_content.potassium} onChange={handleNutrientChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Manufacturer</label>
                <input type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default EditFertilizerForm;