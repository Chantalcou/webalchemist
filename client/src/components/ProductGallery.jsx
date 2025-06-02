// ProductGallery.jsx
import React from "react";
import "./ProductGallery.css";

const ProductGallery = () => {
  const products = [
    {
      image:
        "https://res.cloudinary.com/dqgjcfosx/image/upload/v1722858840/pexels-betsai-ekmeiro-11923614-15433924_kkhkjg.jpg",
      name: "Colección Otoño",
      price: "$299.99",
    },
    {
      image:
        "https://res.cloudinary.com/dqgjcfosx/image/upload/v1722861224/pexels-sergio-arreola-208344354-24182617_gph035.jpg",
      name: "Edición Limitada",
      price: "$459.99",
    },
    {
      image:
        "https://res.cloudinary.com/dqgjcfosx/image/upload/v1723832525/pexels-picswithjer-26555538_ctowr1.jpg",
      name: "Colección Premium",
      price: "$599.99",
    },
    {
      image:
        "https://res.cloudinary.com/dqgjcfosx/image/upload/v1746183887/pexels-catscoming-1907227_tnjv3x.jpg",
      name: "Línea Exclusiva",
      price: "$399.99",
    },
  ];

  return (
    <section className="products-section">
      <div className="gallery-header">
        <h2 className="section-title"></h2>
        <p className="section-subtitle">
          Artesanía contemporánea con tradición
        </p>
      </div>

      <div className="gallery-container">
        
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
              <div className="image-overlay">
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
                <button className="quick-view-button">
                  Explorar Colección
                  <svg className="arrow-icon" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
