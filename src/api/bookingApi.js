/**
 * Little Lemon Booking API Module
 * Provides simulated network API functions for booking reservations.
 */

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => {
    return (s = (s * a) % m) / m;
  };
};

/**
 * Fetches available booking times for a given date.
 * @param {Date} date - The date to check availability for.
 * @returns {Array<string>} List of available time strings (e.g., ['17:00', '18:00']).
 */
export const fetchAPI = (date) => {
  const result = [];
  const validDate = date instanceof Date ? date : new Date(date);
  const random = seededRandom(validDate.getDate());

  for (let i = 17; i <= 23; i += 1) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  // Ensure at least two default times are available if random yields empty
  if (result.length === 0) {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }

  return result;
};

/**
 * Submits the booking form data.
 * @param {Object} formData - Booking submission data.
 * @returns {boolean} True if booking was successfully processed.
 */
export const submitAPI = (formData) => {
  if (!formData || !formData.date || !formData.time) {
    return false;
  }
  return true;
};
