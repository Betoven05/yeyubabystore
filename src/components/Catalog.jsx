// src/components/Catalog.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import JsonData from "../data/data.json";
import { LazyImage } from "../components/LazyImage";

export const Catalog = () => {
  const allProducts = (JsonData.Products || []).filter(
    (p) => p.isActive !== false
  );

  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
  const value = e.target.value;

  const sanitized = value
    .normalize("NFD") 
    .replace(/[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, ""); 

  setSearchText(sanitized);
  };

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
    setShowFiltersMobile(false);
  };

  // 🔍 Filtro combinado: categoría + nombre
  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "TODOS" ||
      (Array.isArray(p.category)
        ? p.category.includes(selectedCategory)
        : p.category === selectedCategory);

    const matchesName = p.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesName;
  });

  return (
    <div
      id="catalogo"
      className="yb-page yb-catalog-section"
      style={{ paddingTop: "60px" }}
    >
      <Helmet>
        <title>Catálogo | Yeyu Baby Store</title>
        <meta
          name="description"
          content="Explora el catálogo de Yeyu Baby Store: juguetes didácticos, ropa y accesorios para bebé con envíos a todo el Perú."
        />
        <link rel="canonical" href="https://yeyubabystore.com/catalogo" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Catálogo | Yeyu Baby Store" />
        <meta
          property="og:description"
          content="Explora el catálogo de Yeyu Baby Store: juguetes didácticos, ropa y accesorios para bebé con envíos a todo el Perú."
        />
        <meta
          property="og:url"
          content="https://yeyubabystore.com/catalogo"
        />
        <meta
          property="og:image"
          content="https://yeyubabystore.com/img/yeyubabystore_web_01.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catálogo | Yeyu Baby Store" />
        <meta
          name="twitter:description"
          content="Explora el catálogo de Yeyu Baby Store: juguetes didácticos, ropa y accesorios para bebé con envíos a todo el Perú."
        />
        <meta
          name="twitter:image"
          content="https://yeyubabystore.com/img/yeyubabystore_web_01.png"
        />
      </Helmet>

      <div className="container">
        <h1>Catálogo</h1>
        <p className="yb-catalog-subtitle">
          Descubre algunos de nuestros productos para tu bebé. Escríbenos por
          WhatsApp para conocer precios, colores y disponibilidad.
        </p>

        {/* 🔍 Buscador por nombre */}
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            className="yb-search-input"
            placeholder="Buscar por nombre..."
            value={searchText}
            onChange={handleSearchChange}
            style={{
              width: "100%",
              maxWidth: 350,
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ddd",
            }}
          />
        </div>

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
                No encontramos productos que coincidan con tu búsqueda 🐣. Prueba
                con otro nombre o vuelve a &quot;Todos&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
