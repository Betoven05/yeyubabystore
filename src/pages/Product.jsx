// src/pages/Product.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { LazyImage } from "../components/LazyImage";

export const Product = () => {
  const { id } = useParams();
  const product = JsonData.Products.find((p) => p.id === id);

  // Hooks SIEMPRE antes de cualquier return condicional
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) {
    return (
      <div className="yb-page">
        <div className="container" style={{ padding: "120px 0 60px" }}>
          <h2>Producto no encontrado</h2>
          <p>
            El producto que buscas no existe o ha sido retirado del catálogo.
          </p>
          <Link to="/catalogo" className="btn btn-custom">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "51945307158";
  const message = `Hola, quiero más información sobre el producto: ${product.name}`;

  // Si el producto tiene 'images', las usamos. Si no, usamos solo 'image'.
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];

  return (
    <div className="yb-page yb-page-product">
      <div className="container yb-page-product-inner">
        <p style={{ marginBottom: 10, fontSize: 13 }}>
          <Link to="/">Inicio</Link> &gt;{" "}
          <Link to="/catalogo">Catálogo</Link> &gt; <span>{product.name}</span>
        </p>

        <div className="row">
          <div className="col-md-5">
            {/* Imagen principal */}
            {images.length > 0 && (
              <LazyImage
                src={`/${images[selectedIndex]}`}
                alt={`${product.name} - Yeyu Baby Store`}
                className="img-responsive yb-product-main-image"
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                  marginBottom: 15,
                }}
              />
            )}

            {/* Miniaturas */}
            {images.length > 1 && (
              <div className="yb-product-thumbnails">
                {images.slice(0, 3).map((imgSrc, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={
                      "yb-product-thumb-btn" +
                      (index === selectedIndex ? " is-active" : "")
                    }
                  >
                    <LazyImage
                      src={`/${imgSrc}`}
                      alt={`${product.name} - imagen ${index + 1}`}
                      className="img-responsive yb-product-thumb-image"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="col-md-7">
            <h2 style={{ marginTop: 0 }}>{product.name}</h2>

            <p style={{ color: "#777", fontSize: 14 }}>
              <strong>Categoría:</strong>{" "}
              {Array.isArray(product.category)
                ? product.category.join(" · ")
                : product.category}
              {product.tag ? ` · ${product.tag}` : ""}
            </p>

            <p style={{ marginTop: 20, whiteSpace: "pre-line" }}>
              {product.description}
            </p>

            <p style={{ marginTop: 30, fontSize: 14 }}>
              ¿Te interesa este producto? Escríbenos por WhatsApp y te contamos
              sobre precios, colores y stock disponible.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-custom"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
