import React, { useState } from "react";
import { Rocket, Layers, Cpu } from "lucide-react";
import "./Pricing.css";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: (
        <>
          <Rocket className="icon" /> Pack Básico
        </>
      ),
      price: "200.000",
      features: [
        "Landing page profesional",
        "Diseño 100% responsive ",
        "Integración con WhatsApp",
        "Integración con redes sociales"
        // "Tiempo de entrega rápido (5-7 días)",
      ],
      maintenance: "Mantenimiento $10.000/mes",
    },
    {
      name: (
        <>
          <Layers className="icon" /> Pack Intermedio
        </>
      ),
      price: "250.000",
      features: [
        "Todo lo del Pack Básico +",
        "Hasta 3 secciones adicionales",
        "Formulario de contacto",
        "Galería interactiva de imágenes + Detalle del producto",
    
      ],
      maintenance: "Mantenimiento $10.000/mes",
    },
    // {
    //   name: (
    //     <>
    //       <Cpu className="icon" /> Pack Avanzado
    //     </>
    //   ),
    //   price: "350.000",
    //   features: [
    //     "Todo lo del Pack Intermedio +",
    //     "Dashboard de administración",
    //     "Sistema de carga de productos",
    //     "Chatbot personalizado",
    //   ],
    // },
    // {
    //   name: "🌎 Ecommerce Plus",
    //   price: "1499",
    //   features: [
    //     "Tienda online completa",
    //     "Pasarela de pagos integrada",
    //     "Carrito de compras",
    //     "Gestión de inventario",
    //     "Reportes analíticos",
    //     "Certificado SSL incluido"
    //   ],
    //   maintenance: "Mantenimiento desde $50/mes",
    //   comingSoon: true
    // }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <h2>Nuestros Paquetes</h2>
      <div className="pricing-notice" id="pricing-notice">
        <span>
          🌐 Dominio y hosting no incluidos - Te ayudamos a conseguirlos al
          mejor precio!
        </span>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            className={`price-card ${index === 1 ? "recommended" : ""}`}
            key={index}
            onMouseEnter={() => setSelectedPlan(index)}
            onMouseLeave={() => setSelectedPlan(null)}
          >
            {index === 1 && (
              <div className="recommended-badge">Más Popular</div>
            )}
            <h3 className="name">{plan.name}</h3>
            <div className="price">
              <span>$</span>
              {plan.price}
              {!plan.comingSoon && <span>/único</span>}
            </div>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {plan.comingSoon ? (
              <button className="plan-button coming-soon" disabled>
                Próximamente
              </button>
            ) : (
<button
  className={`plan-button ${index === 1 ? "recommended" : ""}`}
  onClick={() => {
    const mensaje = `Hola! Estoy interesado en el ${plan.name.props?.children?.[1] || "pack"}`;
    const url = `https://wa.me/1168824488?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }}
>
  Contratar Ahora
</button>


            )}

            <div className="maintenance-note">{plan.maintenance}</div>
          </div>
        ))}
      </div>
{/* 
      <div className="maintenance-section">
        <h3>🔁 Servicio de Mantenimiento</h3>
        <div className="maintenance-features">
          <div className="maintenance-card">
            <h4>Básico ($10/mes)</h4>
            <ul>
              <li>Actualizaciones de contenido</li>
              <li>Cambios menores</li>
              <li>Backups semanales</li>
            </ul>
          </div>
          <div className="maintenance-card">
            <h4>Premium ($30/mes)</h4>
            <ul>
              <li>Todo el Básico +</li>
              <li>Soporte prioritario</li>
              <li>Actualizaciones de seguridad</li>
              <li>Monitoreo 24/7</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Pricing;
