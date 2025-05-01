import React from 'react';
import './Footer.css'; // Add custom styles here if needed

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">HR Cloud</h5>
            <p>Your trusted platform for modern HR solutions and employee management.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center pb-3">
          <small>&copy; {new Date().getFullYear()} HR Cloud. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
