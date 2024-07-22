import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditSeedForm = () => {
    const { id } = useParams(); 
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        planting_instructions: '',
        image: {
            filename: '',
            url: ''
        },
        manufacturer: '',
        city: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/seeds/${id}`)
            .then(response => {
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching seed:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
        
        axios.put(`http://localhost:8080/seeds/${id}`, formData)
            .then(response => {
                console.log('Seed updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating seed:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Planting Instructions</label>
                <input type="text" name="planting_instructions" value={formData.planting_instructions} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Image Filename</label>
                <input type="text" name="image.filename" value={formData.image.filename} onChange={handleImageChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input type="text" name="image.url" value={formData.image.url} onChange={handleImageChange} className="form-control" />
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

export default EditSeedForm;