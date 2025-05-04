import React, { useState } from 'react';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
    setStatusMessage('');
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Network error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page container py-5">
      <h2 className="text-center mb-5 fw-bold fade-in">Get in Touch</h2>
      <div className="row g-5">
        <div className="col-lg-6 fade-in">
          <div className="card p-4 shadow-sm border-0">
            <h4 className="mb-4 text-primary">Send Us a Message</h4>
            <form onSubmit={handleSubmit} noValidate>
              {['name', 'email', 'subject', 'message'].map((field, index) => (
                <div className="mb-3" key={index}>
                  <label htmlFor={field} className="form-label text-capitalize">
                    {field === 'message' ? 'Your Message' : field === 'email' ? 'Email Address' : field === 'name' ? 'Full Name' : 'Subject'}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      className={`form-control ${errors[field] && 'is-invalid'}`}
                      rows="4"
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                    ></textarea>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      className={`form-control ${errors[field] && 'is-invalid'}`}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field === 'name'
                          ? 'John Doe'
                          : field === 'email'
                          ? 'you@example.com'
                          : 'Subject'
                      }
                    />
                  )}
                  {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
                </div>
              ))}
              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && (
                <div className="alert alert-info mt-3 mb-0 text-center fade-in">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="col-lg-6 fade-in">
          <div className="card p-4 shadow-sm border-0 h-100">
            <h4 className="text-primary mb-4">Contact Information</h4>
            <p><strong>Address:</strong> 123 HR Street, Tech City</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> contact@hrcloud.com</p>

            <h5 className="mt-4">Follow Us</h5>
            <div className="d-flex gap-3 fs-4 social-links">
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((platform, idx) => (
                <a
                  key={idx}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
