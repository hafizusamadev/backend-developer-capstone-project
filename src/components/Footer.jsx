import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component with Doormat Navigation, Contact & Social Links
 */
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <h2 className="footer-title">Little Lemon</h2>
          <p className="footer-desc">
            Traditional Mediterranean recipes crafted with modern culinary passion in Chicago.
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer Navigation">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a href="/#order">Order Online</a></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <address className="footer-address">
            <p>123 North Michigan Ave, Chicago, IL</p>
            <p><a href="tel:+13125550199">(312) 555-0199</a></p>
            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Social Media</h3>
          <ul className="footer-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
