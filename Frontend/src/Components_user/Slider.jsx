import React, { useState } from 'react';
import './Slider.css'; // Assuming you have a separate CSS file for styles

const Slider = ({ reviews }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`slide ${index === slideIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${100 * slideIndex}%)`,
              visibility: index === slideIndex ? 'visible' : 'hidden',
            }}
          >
            <div className='sliderimg'><img src={review.imageUrl} alt={`Customer ${index + 1}`} /></div>
            <div className="review-details">
              <p className="customer-name">{review.text}</p>
              <p className="review-text">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button className="prev" onClick={prevSlide}>&lt;</button>
        <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;
