import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Confirmed Booking Page displayed after successful reservation submission.
 */
export default function ConfirmedBookingPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <main id="main-content" className="confirmed-page">
      <div className="container confirmation-wrapper">
        <div className="confirmation-card" role="region" aria-label="Booking Confirmation">
          <div className="confirmation-icon" aria-hidden="true">&#10004;</div>
          <h1 className="confirmation-title">Booking Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for choosing Little Lemon. We have received your table reservation
            and look forward to serving you an authentic Mediterranean meal.
          </p>

          {booking && (
            <div className="booking-details-box">
              <h2 className="details-header">Reservation Summary</h2>
              <ul className="details-list">
                <li><strong>Date:</strong> {booking.date}</li>
                <li><strong>Time:</strong> {booking.time}</li>
                <li><strong>Guests:</strong> {booking.guests}</li>
                <li><strong>Occasion:</strong> {booking.occasion}</li>
              </ul>
            </div>
          )}

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary" role="button">
              Return to Home
            </Link>
            <Link to="/booking" className="btn btn-secondary" role="button">
              Book Another Table
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
