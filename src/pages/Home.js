import React from 'react';
import Footer from '../components/Footer';
import '../styles/Home.css'; // Custom styles for enhancements

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero text-center text-white d-flex align-items-center justify-content-center" aria-label="Hero Section">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to HR Cloud</h1>
          <p className="lead">
            The best platform for HRs and employees to manage their work efficiently.
          </p>
          <a href="/services" className="btn btn-primary btn-lg mt-3" role="button" aria-label="Explore our services">
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features py-5 bg-light" aria-label="Key Features">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Key Features</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4 feature-box">
              <i className="fas fa-users fa-3x text-primary mb-3" aria-hidden="true"></i>
              <h5>Employee Management</h5>
              <p>Track employee records and manage profiles seamlessly.</p>
            </div>
            <div className="col-md-3 mb-4 feature-box">
              <i className="fas fa-calendar-check fa-3x text-success mb-3" aria-hidden="true"></i>
              <h5>Attendance Tracking</h5>
              <p>Manage attendance effortlessly with real-time tracking.</p>
            </div>
            <div className="col-md-3 mb-4 feature-box">
              <i className="fas fa-file-invoice-dollar fa-3x text-warning mb-3" aria-hidden="true"></i>
              <h5>Payroll Management</h5>
              <p>Streamline your payroll process with automated calculations.</p>
            </div>
            <div className="col-md-3 mb-4 feature-box">
              <i className="fas fa-check-circle fa-3x text-danger mb-3" aria-hidden="true"></i>
              <h5>Leave Management</h5>
              <p>Approve, reject, or track leave requests quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5" aria-label="Client Testimonials">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4">
                <blockquote className="blockquote mb-3">
                  "HR Cloud has transformed the way we manage our HR tasks. It's intuitive and efficient."
                </blockquote>
                <footer className="blockquote-footer">HR Manager, XYZ Corp.</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4">
                <blockquote className="blockquote mb-3">
                  "Our employees love the self-service features! It's made HR tasks so much easier."
                </blockquote>
                <footer className="blockquote-footer">CEO, ABC Ltd.</footer>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4">
                <blockquote className="blockquote mb-3">
                  "The attendance and payroll management features have saved us so much time."
                </blockquote>
                <footer className="blockquote-footer">HR Admin, DEF Inc.</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="cta-card">
          <h2>Ready to take your HR processes to the next level?</h2>
          <a href="/contact" className="btn btn-primary btn-lg" role="button" aria-label="Contact us today">Contact Us Today</a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
