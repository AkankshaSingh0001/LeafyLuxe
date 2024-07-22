import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccesoriesCard from '../Cards/AccesoriesCard';
import Nav from '../navproduct';

const Accesories = () => {
    const [accessories, setAccessories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchAccessories();
    }, [currentPage]);

    const fetchAccessories = () => {
        axios.get(`http://localhost:8080/getaccesories?page=${currentPage}`)
            .then(response => {
                setAccessories(response.data.accessories);
                setTotalPages(response.data.totalPages);
            })
            .catch(err => console.log(err));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Nav />
            <div className='main11'>
                <div className='row'>
                    {accessories.length > 0 ? (
                        accessories.map((accessory, index) => (
                            <AccesoriesCard key={index} accessory={accessory} />
                        ))
                    ) : (
                        <p>No accessories found.</p>
                    )}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Accesories;
