// Frontend (React) component to display reviews
import React, { useState, useEffect } from 'react';
import './Reviewshow.css';
import Nav from './navproduct';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/reviewshow')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <>
    <Nav></Nav><br></br><br></br>
      <div className="areviews">
      <h1 className="atitle">Feedbacks</h1><br></br>
      <div className="areviews-list">
        {reviews.map(review => (
          <div key={review._id} className="areview">
            {/* <div className="head-review">
              <img src={review.image} alt="Reviewer" width="250px" />
            </div> */}
            <div className="abody-review">
              <div className="aname-review">{review.name}</div>
              <div className="aplace-review">{review.email}</div><br></br>
              {/* <div className="rating">
                {Array.from({ length: review.rating }, (_, index) => (
                  <i key={index} className="fas fa-star"></i>
                ))}
              </div> */}
              <div className="aplace-review"><span className="hreview">Subject:</span> {review.subject}</div>
              <div className="adesc-review"><span className="hreview">msg:</span>{review.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="acredit">
        Made with <span style={{ color: 'tomato' }}>❤</span> by{' '}
        <a href="https://www.learningrobo.com/">Leafyluxe</a>
      </div>
    </div>
    </>
  );
}

export default Reviews;

