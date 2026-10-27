import React from 'react';
import FormErrorMessage from './FormErrorMessage';

/**
 * Accessible field inputs for table reservation.
 */
export default function BookingFormFields({
  formData,
  errors,
  touched,
  availableTimes,
  minDate,
  onChange,
  onBlur,
}) {
  return (
    <div className="form-fields-grid">
      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="res-date" className="form-label">
          Choose date <span className="required-star">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          min={minDate}
          required
          aria-required="true"
          aria-invalid={touched.date && !!errors.date}
          aria-describedby="date-error"
          className={`form-input ${touched.date && errors.date ? 'input-error' : ''}`}
          onChange={onChange}
          onBlur={onBlur}
        />
        <FormErrorMessage id="date-error" message={touched.date ? errors.date : ''} />
      </div>

      {/* Time Field */}
      <div className="form-group">
        <label htmlFor="res-time" className="form-label">
          Choose time <span className="required-star">*</span>
        </label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          required
          aria-required="true"
          aria-invalid={touched.time && !!errors.time}
          aria-describedby="time-error"
          className={`form-select ${touched.time && errors.time ? 'input-error' : ''}`}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option value="" disabled>Select an available time</option>
          {availableTimes && availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        <FormErrorMessage id="time-error" message={touched.time ? errors.time : ''} />
      </div>

      {/* Guests Field */}
      <div className="form-group">
        <label htmlFor="guests" className="form-label">
          Number of guests <span className="required-star">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="2"
          min="1"
          max="10"
          value={formData.guests}
          required
          aria-required="true"
          aria-invalid={touched.guests && !!errors.guests}
          aria-describedby="guests-error"
          className={`form-input ${touched.guests && errors.guests ? 'input-error' : ''}`}
          onChange={onChange}
          onBlur={onBlur}
        />
        <FormErrorMessage id="guests-error" message={touched.guests ? errors.guests : ''} />
      </div>

      {/* Occasion Field */}
      <div className="form-group">
        <label htmlFor="occasion" className="form-label">
          Occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          className="form-select"
          onChange={onChange}
        >
          <option value="None">None / Regular Dining</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Business">Business Meeting</option>
        </select>
      </div>
    </div>
  );
}
