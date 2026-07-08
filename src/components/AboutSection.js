import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About HOSTTER</h2>
        <p>HOSTTER Apparels is a premium clothing manufacturer and exporter delivering modern, high-quality garments to customers worldwide. We blend craftsmanship, innovation, and customer care to create unique apparel collections.</p>
        <div className="about-grid">
          <div className="about-box">
            <h3>Our Mission</h3>
            <p>To craft stylish, durable garments while supporting fast delivery and reliable service.</p>
          </div>
          <div className="about-box">
            <h3>Our Vision</h3>
            <p>Become the trusted apparel partner for brands and retailers everywhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
