import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <a href="https://wa.me/9629920643" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
          WhatsApp
        </a>

        <a href="https://www.linkedin.com/in/yuvaraj-g-203074294/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
          LinkedIn
        </a>

        <a href="mailto:hellohostterapparels@gmail.com" className="contact-btn gmail">
          Gmail
        </a>

        <a href="https://www.instagram.com/hostter_apparels" target="_blank" rel="noopener noreferrer" className="contact-btn instagram">
          Instagram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
