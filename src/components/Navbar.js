import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();

  // Function to collapse the navbar
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // triggers collapse
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavLinkClick}>
          <img src={logo} alt="HR Cloud Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold fs-4">HR Cloud</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                to="/services"
                onClick={handleNavLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
