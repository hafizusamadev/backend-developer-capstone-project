import { fetchAPI } from '../api/bookingApi';

export const ACTION_TYPES = {
  UPDATE_TIMES: 'UPDATE_TIMES',
};

/**
 * Initializes the list of available booking times for today.
 * @returns {Array<string>} Initial times array
 */
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

/**
 * Reducer function to handle state updates for available booking times.
 * @param {Array<string>} state - Current available times.
 * @param {Object} action - Action with type and payload.
 * @returns {Array<string>} Updated available times.
 */
export const updateTimes = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_TIMES: {
      if (!action.payload) {
        return state;
      }
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};
