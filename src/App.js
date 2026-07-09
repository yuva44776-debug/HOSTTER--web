import React, { useEffect } from 'react';
import './styles/index.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import WhySection from './components/WhySection';
import ProductsSection from './components/ProductsSection';
import CategorySection from './components/CategorySection';
import ContactSection from './components/ContactSection';
import AOS from 'aos';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true
    });

    // Loader logic
    const loaderTimeout = setTimeout(() => {
      const loaderElement = document.getElementById('loader');
      if (loaderElement) {
        loaderElement.style.display = 'none';
      }
    }, 2000);

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <WhySection />
      <ProductsSection />
      <CategorySection />
      <ContactSection />
    </>
  );
}

export default App;
