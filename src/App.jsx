import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';
import { initializeTimes, updateTimes } from './reducers/bookingReducer';
import { submitAPI } from './api/bookingApi';
import './App.css';

/**
 * Main Little Lemon Application component.
 */
export default function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed', { state: { booking: formData } });
      return true;
    }
    return false;
  };

  return (
    <div className="app-layout">
      {/* Skip to main content link for keyboard & screen reader accessibility */}
      <a href="#main-content" className="skip-to-content-link">
        Skip to main content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
