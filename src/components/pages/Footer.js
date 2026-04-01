import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">

        {/* LEFT - ABOUT */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            We connect you with trusted professionals for everyday services.
            From home cleaning to fitness trainers, we bring convenience to your doorstep.
          </p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/\#about">About</a></li>
            <li><a href="/\#careers">Careers</a></li>
            <li><a href="/\#team">Team</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/\#contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h2>Send Message</h2>
          <form className="footer-form">
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your message..." rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

     
      <div className="footer-bottom">
        <p>© 2026 Cudago. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/terms">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;