import React from "react";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Pricing from "./Pricing";
import $ from "jquery";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Tu idea merece una web hecha a su medida</h1>

            <p>Transformamos tu visión en una web funcional, única y potente</p>
            <button
              className="cta-button"
              onClick={() => {
                $("html, body").animate(
                  {
                    scrollTop: $("#pricing-notice").offset().top,
                  },
                  800
                );
              }}
            >
              Quiero mi Web
            </button>
          </div>
        </section>

        {/* <section className="features-section" id="features">
          <div className="feature-card">
            <h3>🚀 Rápido</h3>
            <p>Optimización máxima para mejor performance</p>
          </div>
          <div className="feature-card">
            <h3>💎 Moderno</h3>
            <p>Diseños actualizados con las últimas tendencias</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Perfecto en todos los dispositivos</p>
          </div>
        </section> */}
      </div>
      <Projects />
      <Pricing />

      <ContactForm />
      <Testimonials />
    </>
  );
};

export default LandingPage;
