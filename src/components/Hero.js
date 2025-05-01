import React from 'react';

const Hero = () => {
  return (
    <section className="hero d-flex justify-content-center align-items-center text-center text-white" style={{ backgroundImage: "url('/path-to-your-image.jpg')", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h1 className="display-3 fw-bold animate__animated animate__fadeIn">Welcome to HR Cloud</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">Your all-in-one HR management platform</p>
        <a href="/services" className="btn btn-light btn-lg mt-4 animate__animated animate__fadeIn animate__delay-2s">Explore Services</a>
      </div>
    </section>
  );
};

export default Hero;
