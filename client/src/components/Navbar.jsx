import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="nav-content">
        <a href="/" className="logo">
          <div className="logo-group">
            <img
              src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1749035631/ChatGPT_Image_4_jun_2025_08_13_39_a.m._phqdbn.png"
              alt="Alchemist Logo"
              className="alchemist-logo"
            />
            <img
              src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1745060292/ChatGPT_Image_18_abr_2025__11_04_21_a.m.-removebg-preview_zsjwck.png"
              alt="PixelTailor Logo"
              className="pixeltailor-logo"
            />
          </div>
        </a>
        <div className="nav-links">
          <a href="#about">Inicio</a>
          <a href="#proyect-gallery">Proyectos</a>
          <a
            href="https://wa.me/1168824488?text=Hola!%20Quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
