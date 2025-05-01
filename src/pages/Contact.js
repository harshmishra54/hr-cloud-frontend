// src/pages/Contact.js
import React from 'react';
import Footer from '../components/Footer';
import './Contact.css'; // Style enhancements here

const Contact = () => {
  return (
    <div className="contact-page container py-5">
      <h2 className="text-center mb-5 fw-bold">Get in Touch</h2>
      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card p-4 shadow-sm border-0">
            <h4 className="mb-4 text-primary">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-6">
          <div className="card p-4 shadow-sm border-0 h-100">
            <h4 className="text-primary mb-4">Contact Information</h4>
            <p><strong>Address:</strong> 123 HR Street, Tech City</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> contact@hrcloud.com</p>

            <h5 className="mt-4">Follow Us</h5>
            <div className="d-flex gap-3 fs-4 social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
