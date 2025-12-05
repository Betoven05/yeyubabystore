// src/pages/Product.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import JsonData from "../data/data.json";
import { LazyImage } from "../components/LazyImage";

const baseUrl = "https://yeyubabystore.com";

export const Product = () => {
  const { id } = useParams();
  const product = JsonData.Products.find((p) => p.id === id);

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!product) {
    return (
      <div className="yb-page">
        <Helmet>
          <title>Producto no encontrado | Yeyu Baby Store</title>
          <meta
            name="description"
            content="El producto que buscas no cuenta con stock o ha sido retirado del catálogo de Yeyu Baby Store."
          />
          <link rel="canonical" href={`${baseUrl}/catalogo`} />

          {/* Open Graph genérico */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Producto no encontrado | Yeyu Baby Store" />
          <meta
            property="og:description"
            content="El producto que buscas no cuenta con stock o ha sido retirado del catálogo de Yeyu Baby Store."
          />
          <meta property="og:url" content={`${baseUrl}/catalogo`} />
          <meta
            property="og:image"
            content={`${baseUrl}/img/yeyubabystore_web_01.png`}
          />

          {/* Twitter Cards genérico */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Producto no encontrado | Yeyu Baby Store" />
          <meta
            name="twitter:description"
            content="El producto que buscas no cuenta con stock o ha sido retirado del catálogo de Yeyu Baby Store."
          />
          <meta
            name="twitter:image"
            content={`${baseUrl}/img/yeyubabystore_web_01.png`}
          />
        </Helmet>

        <div className="container" style={{ padding: "120px 0 60px" }}>
          <h1>Producto no encontrado</h1>
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

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : [];

  const productUrl = `${baseUrl}/producto/${product.id}`;
  const productImagesAbsolute = images.map((img) => `${baseUrl}/${img}`);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${baseUrl}/catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  const productLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: productImagesAbsolute,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Yeyu Baby Store",
    },
    category: Array.isArray(product.category)
      ? product.category.join(" > ")
      : product.category,
    url: productUrl,
  };

  const metaDescription =
    (product.description && product.description.slice(0, 155)) ||
    `Detalle del producto ${product.name} en Yeyu Baby Store.`;

  return (
    <div className="yb-page yb-page-product">
      <Helmet>
        {/* SEO básico */}
        <title>{product.name} | Yeyu Baby Store</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={productUrl} />

        {/* Open Graph para producto */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Yeyu Baby Store`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={productUrl} />
        {productImagesAbsolute[0] && (
          <meta property="og:image" content={productImagesAbsolute[0]} />
        )}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${product.name} | Yeyu Baby Store`}
        />
        <meta name="twitter:description" content={metaDescription} />
        {productImagesAbsolute[0] && (
          <meta name="twitter:image" content={productImagesAbsolute[0]} />
        )}

        {/* Breadcrumb JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>

        {/* Product JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(productLd)}
        </script>
      </Helmet>

      <div className="container yb-page-product-inner">
        {/* Breadcrumb visual para el usuario */}
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
            <h1 style={{ marginTop: 5 }}>{product.name}</h1>

            <p style={{ color: "#777", fontSize: 13 }}>
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
