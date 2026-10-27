import { describe, it, expect } from 'vitest';
import { initializeTimes, updateTimes, ACTION_TYPES } from '../reducers/bookingReducer';

describe('bookingReducer tests', () => {
  it('initializeTimes returns a non-empty array of time strings', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times[0]).toMatch(/^\d{1,2}:\d{2}$/);
  });

  it('updateTimes returns available times array when date changes', () => {
    const initialState = ['17:00', '18:00'];
    const action = {
      type: ACTION_TYPES.UPDATE_TIMES,
      payload: '2026-10-30',
    };
    const newState = updateTimes(initialState, action);

    expect(Array.isArray(newState)).toBe(true);
    expect(newState.length).toBeGreaterThan(0);
  });

  it('updateTimes returns previous state if action payload is missing', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: ACTION_TYPES.UPDATE_TIMES, payload: null };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('updateTimes returns previous state for unknown actions', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
