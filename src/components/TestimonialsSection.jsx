import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import TestimonialCard from './TestimonialCard';

/**
 * Testimonials Section presenting peer customer ratings and experiences.
 */
export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="testimonials-title">
          What Our Customers Say
        </h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
