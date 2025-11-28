// src/components/TopSellers.jsx
import React from "react";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { LazyImage } from "./LazyImage";

const TOP_PRODUCT_IDS = ["prod-aquashoes-bebe-c1", 
    "prod-clip-sujetador-chupon", 
    "prod-media-sonajero-munecas",
    "prod-muselina-algodon-happyflute"];

export const TopSellers = () => {
  const products = JsonData.Products || [];
  const topProducts = products.filter((p) => TOP_PRODUCT_IDS.includes(p.id));

  if (!topProducts.length) {
    return null;
  }

  // Agrupar de 2 en 2
  const groups = [];
  for (let i = 0; i < topProducts.length; i += 2) {
    groups.push(topProducts.slice(i, i + 2));
  }

  return (
    <section id="mas-vendidos" className="yb-top-sellers">
      <div className="container">
        <div className="yb-top-inner">
          <h2 className="yb-top-title">Más vendidos</h2>
          <p className="yb-top-subtitle">
            Estos son algunos de nuestros productos favoritos de las familias que
            confían en Yeyu Baby Store 🧸💕
          </p>

          <div
            id="yb-top-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            {/* Indicadores: uno por grupo (slide) */}
            <ol className="carousel-indicators">
              {groups.map((_, index) => (
                <li
                  key={index}
                  data-target="#yb-top-carousel"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>

            {/* Slides */}
            <div className="carousel-inner" role="listbox">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className={`item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row yb-top-slide">
                    {group.map((product) => (
                      <div
                        key={product.id}
                        className="col-xs-6 col-sm-6 yb-top-col"
                      >
                        <div className="yb-top-card">
                          <LazyImage
                            src={`/${product.image}`}
                            alt={`${product.name} - Yeyu Baby Store`}
                            className="img-responsive yb-top-image"
                          />
                          <h3 className="yb-top-name">{product.name}</h3>
                          <p className="yb-top-category">
                            {product.category && product.category.join(" · ")}
                          </p>
                          {product.shortDescription && (
                            <p className="yb-top-description">
                              {product.shortDescription}
                            </p>
                          )}

                          <Link
                            to={`/producto/${product.id}`}
                            className="btn btn-custom btn-sm"
                          >
                            Ver producto
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Controles */}
            <a
              className="left carousel-control"
              href="#yb-top-carousel"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="right carousel-control"
              href="#yb-top-carousel"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              <span className="sr-only">Siguiente</span>
            </a>
          </div>

          <div className="yb-top-cta">
            <p>
              ¿Quieres ver más opciones? Descubre todos nuestros productos en el
              catálogo.
            </p>
            <Link to="/catalogo" className="btn btn-custom">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
