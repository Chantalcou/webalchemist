import React, { useState, useEffect } from "react";
import $ from 'jquery'; // Importar jQuery
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Pricing from "./Pricing";
import TargetSection from './TargetSection'
import "./LandingPage.css";

const LandingPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const optimizedImageUrl = 'https://res.cloudinary.com/dqgjcfosx/image/upload/f_auto,q_auto:low,w_1920/v1745063134/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_xy4rbu.jpg';
  
  useEffect(() => {
    const img = new Image();
    img.src = optimizedImageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  // Función de scroll suave con jQuery
  const scrollToPricing = () => {
    const pricingSection = $('#pricing-notice');
    if (pricingSection.length) {
      $('html, body').animate({
        scrollTop: pricingSection.offset().top - 70 // Ajuste para navbar
      }, 800); // Duración de 800ms para un efecto suave
    }
  };

  return (
    <>
      <div className="landing-container">
        <section className={`hero-section ${imageLoaded ? 'loaded' : ''}`}>
          <div className="hero-content">
            <h1>Llevá tu emprendimiento al próximo nivel</h1>
            <p>Mostrá tu catálogo, conectá con tus clientes y destacate con una web profesional hecha a medida.</p>
            <button
              className="cta-button"
              onClick={scrollToPricing}
            >
              Quiero mi Web
            </button>
          </div>
          
          {/* Placeholder SVG mientras carga */}
          {!imageLoaded && (
            <svg className="bg-placeholder" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
              <rect width="100%" height="100%" fill="#0a192f" />
              {/* Estrellas minimalistas */}
              {Array.from({length: 50}).map((_, i) => (
                <circle 
                  key={i}
                  cx={Math.random() * 1200} 
                  cy={Math.random() * 800} 
                  r={Math.random() * 1.5} 
                  fill="#fff" 
                  opacity={Math.random() * 0.8}
                />
              ))}
            </svg>
          )}
        </section>
      </div>
      <TargetSection/>
      <Projects />
      <Pricing />
    </>
  );
};

export default LandingPage;