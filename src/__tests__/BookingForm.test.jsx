import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm Unit Tests', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00'];
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  it('renders the BookingForm heading correctly', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const heading = screen.getByRole('heading', { name: /Reserve Your Table/i });
    expect(heading).toBeInTheDocument();
  });

  it('applies correct HTML5 validation attributes to all form fields', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveAttribute('min');

    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  it('disables submit button and shows error when guests count is invalid', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const guestsInput = screen.getByLabelText(/Number of guests/i);
    const submitBtn = screen.getByRole('button', { name: /Make Your reservation/i });

    // Enter invalid number of guests (0)
    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.blur(guestsInput);

    expect(submitBtn).toBeDisabled();
    expect(screen.getByRole('alert')).toHaveTextContent(/Please enter at least 1 guest/i);

    // Enter invalid number of guests (> 10)
    fireEvent.change(guestsInput, { target: { value: '15' } });
    expect(submitBtn).toBeDisabled();
    expect(screen.getByRole('alert')).toHaveTextContent(/Maximum capacity per table is 10/i);
  });

  it('calls submitForm when valid form is submitted', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitBtn = screen.getByRole('button', { name: /Make Your reservation/i });
    expect(submitBtn).not.toBeDisabled();

    fireEvent.click(submitBtn);
    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
  });
});
