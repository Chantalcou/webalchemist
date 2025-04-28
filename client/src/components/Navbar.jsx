import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="nav-content">
        <a href="/" className="logo">
          <img
            src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1745060292/ChatGPT_Image_18_abr_2025__11_04_21_a.m.-removebg-preview_zsjwck.png"
            alt="PixelTailor Logo"
          />
        </a>
        <div className="nav-links">
          <a href="#about">Inicio</a>
          <a href="#features">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
