import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>¿Querés una web simple y profesional?</p>
        <p>
          Contactanos por <a href="https://wa.me/1168824488" target="_blank" rel="noopener noreferrer">WhatsApp</a> 
        </p>
        <p>Trabajamos desde Argentina para todo el mundo 🌍</p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DevCustom - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
