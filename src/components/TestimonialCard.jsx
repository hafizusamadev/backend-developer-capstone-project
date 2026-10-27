import React from 'react';

/**
 * Testimonial Card displaying rating stars, avatar, name, and comment.
 */
export default function TestimonialCard({ testimonial }) {
  const stars = Array.from({ length: testimonial.rating }, (_, i) => i + 1);

  return (
    <article className="testimonial-card">
      <div className="testimonial-rating" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {stars.map((star) => (
          <span key={star} className="star-icon" aria-hidden="true">&#9733;</span>
        ))}
      </div>
      <div className="testimonial-user">
        <img
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}`}
          className="testimonial-avatar"
          loading="lazy"
        />
        <h3 className="testimonial-name">{testimonial.name}</h3>
      </div>
      <blockquote className="testimonial-review">
        <p>"{testimonial.review}"</p>
      </blockquote>
    </article>
  );
}
