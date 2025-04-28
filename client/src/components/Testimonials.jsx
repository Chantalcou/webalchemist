import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Excelente trabajo y atención personalizada. Transformaron completamente nuestra presencia online.",
      author: "Juan Pérez",
      role: "CEO TechStart"
    },
    {
      text: "Increíble profesionalismo y resultados superiores a lo esperado. ¡Totalmente recomendados!",
      author: "María González",
      role: "Directora Marketing Digital"
    },
    // Agrega más testimonios...
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div 
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <div className="quote-icon">“</div>
            <p>{testimonial.text}</p>
            <div className="author-info">
              <h4>{testimonial.author}</h4>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
        <div className="carousel-controls">
          <button 
            onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : testimonials.length - 1))}
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <button 
            onClick={() => setActiveIndex(prev => (prev < testimonials.length - 1 ? prev + 1 : 0))}
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;