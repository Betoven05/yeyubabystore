// src/components/Catalog.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import JsonData from "../data/data.json";
import { LazyImage } from "../components/LazyImage";

export const Catalog = () => {
  // Solo productos activos (si no tiene isActive, se asume true)
  const allProducts = (JsonData.Products || []).filter(
    (p) => p.isActive !== false
  );

  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const categories = useMemo(() => {
    const set = new Set();
    allProducts.forEach((p) => {
      if (Array.isArray(p.category)) {
        p.category.forEach((c) => set.add(c));
      } else if (typeof p.category === "string") {
        set.add(p.category);
      }
    });
    return Array.from(set);
  }, [allProducts]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    // En móvil, al elegir una categoría ocultamos el panel
    setShowFiltersMobile(false);
  };

  const filteredProducts =
    selectedCategory === "TODOS"
      ? allProducts
      : allProducts.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(selectedCategory)
            : p.category === selectedCategory
        );

  return (
    <div
      id="catalogo"
      className="yb-page yb-catalog-section"
      style={{ paddingTop: "60px" }} // menos espacio arriba
    >
      <div className="container">
        <h2>Catálogo</h2>
        <p className="yb-catalog-subtitle">
          Descubre algunos de nuestros productos para tu bebé. Escríbenos por
          WhatsApp para conocer precios, colores y disponibilidad.
        </p>

        {/* Toggle móvil tipo "3 rayas" */}
        <div className="yb-catalog-filters-toggle">
          <button
            type="button"
            className="yb-catalog-filters-toggle-btn"
            onClick={() => setShowFiltersMobile((prev) => !prev)}
          >
            <span className="yb-catalog-filters-toggle-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="yb-catalog-filters-toggle-label">
              {selectedCategory === "TODOS"
                ? "Todas las categorías"
                : selectedCategory}
            </span>
          </button>
        </div>

        {/* Panel que contiene la barra de filtros */}
        <div
          className={
            "yb-catalog-filters-panel" +
            (showFiltersMobile ? " is-open" : "")
          }
        >
          <div className="yb-catalog-filters">
            <button
              type="button"
              className={
                "yb-catalog-filter-btn" +
                (selectedCategory === "TODOS" ? " is-active" : "")
              }
              onClick={() => handleSelectCategory("TODOS")}
            >
              Todos
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={
                  "yb-catalog-filter-btn" +
                  (selectedCategory === cat ? " is-active" : "")
                }
                onClick={() => handleSelectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="row yb-catalog-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-xs-6 col-sm-4 col-md-3 yb-product-column"
            >
              <div className="thumbnail yb-product-card">
                {product.image && (
                  <LazyImage
                    src={`/${product.image}`}
                    alt={`${product.name} - Yeyu Baby Store`}
                    className="img-responsive yb-product-image"
                  />
                )}
                <div className="caption">
                  <h4 className="yb-product-name">{product.name}</h4>
                  <p className="yb-product-category">
                    {Array.isArray(product.category)
                      ? product.category.join(" · ")
                      : product.category}
                  </p>

                  {product.isSale && (
                    <span className="label label-danger">SALE</span>
                  )}

                  <div style={{ marginTop: 8 }}>
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

          {filteredProducts.length === 0 && (
            <div className="col-md-12">
              <p>
                No encontramos productos en esta categoría por ahora 🐣. Prueba
                con otra opción o vuelve a "Todos".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
