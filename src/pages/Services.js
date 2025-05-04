import React from 'react';
import Footer from '../components/Footer';
import trackingIcon from '../assets/tracking-icon.png';
import leaveIcon from '../assets/leave-icon.png';
import payrollIcon from '../assets/payroll-icon.png';

import './Service.css';

const Services = () => {
  return (
    <div className="services-page py-0">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold">Our Services</h2>

        <div className="row">
          {/* Service 1: Employee Tracking */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={trackingIcon}
                alt="Employee Tracking"
                className="card-img-top service-icon"
              />
              <div className="card-body">
                <h5 className="card-title">Employee Tracking</h5>
                <p className="card-text">
                  Track employee performance and attendance seamlessly with real-time updates.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2: Attendance Management */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={leaveIcon}
                alt="Attendance Management"
                className="card-img-top service-icon"
              />
              <div className="card-body">
                <h5 className="card-title">Attendance Management</h5>
                <p className="card-text">
                  Efficiently manage attendance, track leaves, and generate reports with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3: Payroll Insights */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={payrollIcon}
                alt="Payroll Insights"
                className="card-img-top service-icon"
              />
              <div className="card-body">
                <h5 className="card-title">Payroll Insights</h5>
                <p className="card-text">
                  Get detailed payroll reports and insights with automated tax calculations.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4: Leave Approvals */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={leaveIcon}
                alt="Leave Approvals"
                className="card-img-top service-icon"
              />
              <div className="card-body">
                <h5 className="card-title">Leave Approvals</h5>
                <p className="card-text">
                  Simplify the leave approval process with automated workflows and notifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mt-5">
          <h4 className="fw-bold mb-3">What Our Clients Say</h4>
          <p className="text-muted">
            Our clients trust us to manage their HR needs efficiently and securely.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
