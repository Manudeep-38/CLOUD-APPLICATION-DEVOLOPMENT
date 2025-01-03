import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@logistica.com</p>
          <p>Phone: +1 (234) 567-89</p>
          <p>Address: 123 Logistics Avenue, City, Country</p>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Logistica. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
