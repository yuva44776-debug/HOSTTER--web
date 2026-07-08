import React from 'react';

const WhySection = () => {
  return (
    <section className="why-section">
      <h2 className="why-title">WHY HOSTTER?</h2>
      <p className="why-subtitle">Many reasons, but here are the main highlights</p>

      <div className="why-container">
        <div className="why-box">
          <div className="number">01</div>
          <div className="icon">🏆</div>
          <h3>Quality Standards</h3>
        </div>

        <div className="why-box">
          <div className="number">02</div>
          <div className="icon">👑</div>
          <h3>Highly Experience</h3>
        </div>

        <div className="why-box">
          <div className="number">03</div>
          <div className="icon">🧵</div>
          <h3>Variety Of Fabrics</h3>
        </div>

        <div className="why-box">
          <div className="number">04</div>
          <div className="icon">🏭</div>
          <h3>Infrastructure</h3>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
