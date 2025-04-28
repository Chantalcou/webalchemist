import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>info@devcustom.com</p>
          <p>+54 9 11 1234-5678</p>
        </div>
        <div className="footer-section">
          <h4>Redes</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 DevCustom - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;