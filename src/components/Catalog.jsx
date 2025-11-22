// src/components/catalog.jsx
import React from "react";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";

export const Catalog = () => {
  const products = JsonData.Products || [];

  return (
    <div id="catalogo" className="yb-catalog-section">
      <div className="container">
        <h2>Catálogo</h2>
        <p className="yb-catalog-subtitle">
          Descubre algunos de nuestros productos para tu bebé. Escríbenos por
          WhatsApp para conocer precios, colores y disponibilidad.
        </p>

        <div className="row" style={{ marginTop: 30 }}>
          {products.map((product) => (
            <div
              key={product.id}
              className="col-xs-12 col-sm-6 col-md-4 yb-product-column"
            >
              <div className="thumbnail yb-product-card">
                {product.image && (
                  <img
                    src={`/${product.image}`}
                    alt={`${product.name} - Yeyu Baby Store`}
                    className="img-responsive yb-product-image"
                  />
                )}
                <div className="caption">
                  <h4 className="yb-product-name">{product.name}</h4>
                  <p className="yb-product-category">
                    {product.category.join(" · ")}
                  </p>

                  {product.isSale && (
                    <span className="label label-danger">SALE</span>
                  )}

                  <div style={{ marginTop: 10 }}>
                    <Link
                      to={`/producto/${product.id}`}
                      className="btn btn-custom btn-sm"
                    >
                      Ver producto
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className="col-md-12">
              <p>
                Pronto estaremos agregando más productos a nuestro catálogo 🐣
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
