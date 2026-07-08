import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="video/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="hero-text" data-aos="fade-up">
          <h1 className="tagline">TIMELY - RELIABLE - UNIQUE - EFFICIENT</h1>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img src="images/profile.png" alt="Profile Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
