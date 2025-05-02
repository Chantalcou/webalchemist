// PortfolioLanding.jsx
import React from "react";
import "./PortfolioLanding.css";

const PortfolioLanding = () => {
  return (
    <div className="portfolio-landing">
      {/* Hero Section */}

{/* Expertise Section */}
<section className="expertise-section">
  <h2 className="section-title">Especialidades Médicas</h2>
  <div className="expertise-grid">
    {[
      {
        title: "Diagnóstico por Imágenes",
        icon: "🩻",
        description: "Tecnología de última generación para diagnósticos precisos"
      },
      {
        title: "Cirugía Minimamente Invasiva",
        icon: "⚕️",
        description: "Técnicas avanzadas para recuperaciones más rápidas"
      },
      {
        title: "Medicina Preventiva",
        icon: "🫀",
        description: "Programas personalizados de salud preventiva"
      },
      {
        title: "Telemedicina",
        icon: "📱",
        description: "Consultas especializadas a distancia"
      }
    ].map((item, index) => (
      <div key={index} className="expertise-card">
        <div className="expertise-icon">
          {item.icon}
        </div>
        <h3 className="expertise-title">{item.title}</h3>
        <p className="expertise-description">{item.description}</p>
      </div>
    ))}
  </div>
</section>

      {/* Portfolio Showcase */}
      <section className="portfolio-section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="portfolio-grid">
          {[
            {
              id: 1,
              image:
                "https://res.cloudinary.com/dqgjcfosx/image/upload/v1746187029/pexels-shkrabaanthony-5215013_ywbeuh.jpg",
              category: "Web Design",
            },
            {
              id: 2,
              image:
                "https://res.cloudinary.com/dqgjcfosx/image/upload/v1746187029/pexels-shkrabaanthony-5215024_crexir.jpg",
              category: "Mobile App",
            },
            {
              id: 3,
              image:
                "https://res.cloudinary.com/dqgjcfosx/image/upload/v1746187157/pexels-shkrabaanthony-5215010_dtw91p.jpg",
              category: "Mobile App",
            },
          ].map((project) => (
            <div
              key={project.id}
              className="portfolio-item"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="portfolio-overlay">
                <h3 className="project-title">Proyecto {project.id}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2 className="section-title">Trabajemos juntos</h2>
          <div className="social-links">
            {["📩 Email", "💼 LinkedIn", "🐦 Twitter", "📷 Dribbble"].map(
              (item, index) => (
                <a key={index} href="#!" className="social-link">
                  {item}
                  <div className="link-hover"></div>
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioLanding;
