import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About HOSTTER</h2>
        <p className="about-intro">
          Garment manufacturing requires exceptional attention to comfort, safety, durability, and attractive designs. We manufacture premium-quality children's clothing using soft, breathable, skin-friendly fabrics that provide maximum comfort throughout the day. Every garment is designed to withstand active lifestyles while maintaining vibrant colors, excellent fit, and long-lasting performance.
        </p>
        <p className="about-intro">
          Our production process follows stringent quality standards, ensuring every garment is free from defects and made with child-safe materials. We offer a wide range of kids' apparel, including casual wear, school wear, party wear, sleepwear, and seasonal collections. From design development to final packaging, every product is carefully crafted to meet the expectations of parents, retailers, and global apparel brands.
        </p>
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
