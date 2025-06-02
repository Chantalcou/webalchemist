// src/components/Spinner.jsx
import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner-logo">
          <img 
            src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1748350905/Flux_Dev_Create_a_sleek_modern_logo_for_alchemistwebminimalist_2_vhl6n3-removebg-preview_sszqgr.png" 
            alt="AlchemistWeb Logo"
          />
        </div>
        <div className="spinner">
          <div className="spinner-sector spinner-sector-top"></div>
          <div className="spinner-sector spinner-sector-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;