import React, { useState } from 'react';
import BookingFormFields from './BookingFormFields';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    date: todayStr,
    time: availableTimes && availableTimes.length > 0 ? availableTimes[0] : '',
    guests: 2,
    occasion: 'None',
  });

  const [touched, setTouched] = useState({ date: false, time: false, guests: false });

  const validate = (data) => {
    const errs = {};
    if (!data.date) {
      errs.date = 'Please select a reservation date.';
    } else if (data.date < todayStr) {
      errs.date = 'Reservation date cannot be in the past.';
    }
    if (!data.time) {
      errs.time = 'Please select a reservation time.';
    }
    const guestNum = parseInt(data.guests, 10);
    if (!guestNum || guestNum < 1) {
      errs.guests = 'Please enter at least 1 guest.';
    } else if (guestNum > 10) {
      errs.guests = 'Maximum capacity per table is 10 guests.';
    }
    return errs;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true });
    if (!isFormValid) return;
    submitForm(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <h2 className="form-heading">Reserve Your Table</h2>
      <p className="form-subtext">
        Fill in your details below to secure your table at Little Lemon.
      </p>

      <BookingFormFields
        formData={formData}
        errors={errors}
        touched={touched}
        availableTimes={availableTimes}
        minDate={todayStr}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="form-submit-wrapper">
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          disabled={!isFormValid}
          aria-label="Make Your reservation"
        >
          Make Your reservation
        </button>
      </div>
    </form>
  );
}
