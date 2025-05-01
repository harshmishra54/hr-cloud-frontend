// src/pages/About.js
import React from 'react';
import Footer from '../components/Footer';
import './About.css';

import missionImg from '../assets/about/mission.jpg';
import valueImg from '../assets/about/value.jpg';

const About = () => {
  return (
    <div className="about-page">
      <div className="container py-5">
        <h2 className="text-center mb-5 display-5 fw-bold">About HR Cloud</h2>

        {/* Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src={missionImg}
              alt="Our Mission"
              className="img-fluid rounded shadow mission-img"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Our Mission</h3>
            <p className="text-muted">
              At HR Cloud, we strive to simplify HR operations through a smart and intuitive platform
              that empowers HR admins and employees alike. We help streamline onboarding, attendance, payroll,
              and more — saving time and reducing errors.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src={valueImg}
              alt="Our Values"
              className="img-fluid rounded shadow value-img"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Our Core Values</h3>
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item">🚀 Innovation – We build modern solutions for modern workplaces.</li>
              <li className="list-group-item">⚙️ Efficiency – Automating HR to save valuable time and effort.</li>
              <li className="list-group-item">🔍 Transparency – Clear, open, and easy access to HR data.</li>
            </ul>
          </div>
        </div>

        {/* Optional Recognition Section */}
        <div className="text-center mt-5">
          <h4 className="fw-bold mb-3">Recognized by leading businesses worldwide</h4>
          <p className="text-muted">Our clients trust us to manage thousands of employees daily.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
