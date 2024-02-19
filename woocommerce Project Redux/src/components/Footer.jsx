import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Company Name</h3>
          <p>A brief description of your company.</p>
        </div>
        <div className="footer-right">
          <h3>Connect with Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
