import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer aria-label="Footer">
    <section className="footer-content">
      <h3>&copy; 2025 ParkWiNK.</h3>
      <div className="contact-info">
        <div className="contact-header">
          <p className="center-text">Contact</p>
        </div>
        <div className="contact-details">
          <p className="center-text">+39 347 463 6990</p>
          <p className="center-text">
            <a href="https://www.google.com" className="email-link">Google</a>
          </p>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
