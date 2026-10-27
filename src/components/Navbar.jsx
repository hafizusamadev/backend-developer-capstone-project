import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Bar Component with accessible mobile toggle
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Menu', path: '/#menu' },
    { name: 'Reservations', path: '/booking' },
    { name: 'Order Online', path: '/#order' },
    { name: 'Login', path: '/#login' },
  ];

  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="brand-logo" onClick={closeMenu} aria-label="Little Lemon Home">
          <span className="logo-text">LITTLE LEMON</span>
          <span className="logo-sub">CHICAGO</span>
        </Link>

        <button
          className="mobile-nav-toggle"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <nav
          className={`primary-nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Main Navigation"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`nav-link ${
                    location.pathname === link.path ? 'active-link' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
