import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Section introducing Little Lemon with call-to-action to table reservation.
 */
export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-heading">Little Lemon</h1>
          <h2 className="hero-subheading">Chicago</h2>
          <p className="hero-description">
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. Experience vibrant flavors and
            warm hospitality.
          </p>
          <Link
            to="/booking"
            className="btn btn-primary"
            role="button"
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Delicious gourmet Mediterranean dishes on a dining table"
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
