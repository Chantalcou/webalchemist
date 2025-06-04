import React, { useState } from "react";
import { Rocket, Layers } from "lucide-react";
import "./Pricing.css";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: (
        <>
          <Rocket className="icon" /> Ideal para Emprender
        </>
      ),
      shortDesc: "Presencia online profesional sin complicaciones.",
      price: "200.000",
      features: [
        "Landing page moderna y clara",
        "Diseño responsive (móvil, tablet, PC)",
        "Botón directo a WhatsApp",
        "Enlaces a redes sociales",
      ],
      maintenance: "*Mantenimiento opcional disponible",
      maintenanceDetail: "Recomendado para quienes quieren delegar actualizaciones y soporte técnico.",
    },
    {
      name: (
        <>
          <Layers className="icon" /> Para Mostrar Productos
        </>
      ),
      shortDesc: "Ideal para catálogos simples o mostrar varios servicios.",
      price: "250.000",
      features: [
        "Todo lo del plan anterior +",
        "Hasta 3 secciones extra (ej: Nosotros, Servicios, Galería)",
        "Formulario de contacto con aviso por email",
        "Galería visual de productos o trabajos",
      ],
      maintenance: "*Mantenimiento opcional disponible",
      maintenanceDetail: "Nos encargamos de mantener tu web actualizada, segura y funcionando.",
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <h2>Elegí el plan que mejor se adapta a vos</h2>

      <div className="pricing-notice">
        <span>
          🌐 Dominio y hosting no incluidos. ¡Te ayudamos a conseguirlos al mejor precio!
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
            <p className="short-description">{plan.shortDesc}</p>

            <div className="price">
              <strong>${plan.price}</strong>
              <span>Pago único</span>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              className={`plan-button ${index === 1 ? "recommended" : ""}`}
              onClick={() => {
                const mensaje = `Hola! Estoy interesado en el plan "${
                  plan.name.props?.children?.[1] || "elegido"
                }"`;
                const url = `https://wa.me/1168824488?text=${encodeURIComponent(
                  mensaje
                )}`;
                window.open(url, "_blank");
              }}
            >
              ¡Quiero este Pack!
            </button>

            <div className="maintenance-note">
              {plan.maintenance} <br />
              <small>{plan.maintenanceDetail}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
