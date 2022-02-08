import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel.js';

const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1>My Happy Clients</h1>
        <div className="container">
            <div className="testimonials-content">
                <TestimonialsCarousel />
            </div>
        </div>
    </div>
  )
};

export default Testimonials;
