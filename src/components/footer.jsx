import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best services and products for our customers.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Feed back</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
