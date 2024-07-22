import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditAccessoryForm = () => {
    const { id } = useParams(); 
    const [formData, setFormData] = useState({
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

    useEffect(() => {
        axios.get(`http://localhost:8080/herbs/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching accessory:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleGrowingConditionsChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            growing_conditions: {
                ...formData.growing_conditions,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8080/herbs/${id}`, formData)
            .then(response => {
                console.log('Accessory updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating accessory:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Scientific Name</label>
                <input type="text" name="scientific_name" value={formData.scientific_name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Growing Conditions</label>
                <div className="mb-3">
                    <label className="form-label">Temperature</label>
                    <input type="text" name="temperature" value={formData.growing_conditions.temperature} onChange={handleGrowingConditionsChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Soil Type</label>
                    <input type="text" name="soil_type" value={formData.growing_conditions.soil_type} onChange={handleGrowingConditionsChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sunlight</label>
                    <input type="text" name="sunlight" value={formData.growing_conditions.sunlight} onChange={handleGrowingConditionsChange} className="form-control" />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Image Filename</label>
                <input type="text" name="filename" value={formData.image.filename} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="text" name="url" value={formData.image.url} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default EditAccessoryForm;