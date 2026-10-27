import React from 'react';
import BookingForm from '../components/BookingForm';

/**
 * Booking Page containing the reservation form and information banner.
 */
export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <main id="main-content" className="booking-page">
      <section className="booking-hero-banner" aria-label="Reservation page banner">
        <div className="container">
          <h1 className="booking-page-title">Table Reservation</h1>
          <p className="booking-page-subtitle">
            Experience exceptional Mediterranean dining at Little Lemon Chicago.
          </p>
        </div>
      </section>

      <section className="container booking-form-section" aria-label="Reservation form section">
        <div className="booking-card-wrapper">
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </main>
  );
}
