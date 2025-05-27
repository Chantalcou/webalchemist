// TargetSection.jsx
import React from 'react';
import './TargetSection.css';

const TargetSection = () => {
  return (
    <section className="target-section">
      <div className="target-container">
        <div className="section-header">
   
          <p className="section-subtitle">
            Si buscás una presencia digital profesional y accesible, estás en el lugar correcto
          </p>
        </div>

        <div className="target-grid">
          <div className="target-card">
            <div className="card-icon">🩺</div>
            <h3>Profesionales de la Salud</h3>
            <ul className="card-list">
              <li>Médicos y especialistas</li>
              <li>Psicólogos y terapeutas</li>
              <li>Centros de rehabilitación</li>
            </ul>
 
          </div>

          <div className="target-card">
            <div className="card-icon">🎨</div>
            <h3>Artistas y Creativos</h3>
            <ul className="card-list">
              <li>Diseñadores independientes</li>
              <li>Artistas visuales</li>
              <li>Emprendedores culturales</li>
            </ul>
           
          </div>

          <div className="target-card">
            <div className="card-icon">🏪</div>
            <h3>Pequeños Negocios</h3>
            <ul className="card-list">
              <li>Tiendas locales</li>
              <li>Servicios profesionales</li>
              <li>Emprendimientos gastronómicos</li>
            </ul>
          
          </div>
        </div>

        <div className="section-footer">
          <p className="footer-text">
            Creamos soluciones digitales <strong>claras, accesibles</strong> y 
            <strong> optimizadas para móviles</strong> que realmente funcionan
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;