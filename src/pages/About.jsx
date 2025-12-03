// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { LazyImage } from "../components/LazyImage";

export const AboutPage = ({ data }) => {
  const paragraph =
    data &&
    data.About &&
    typeof data.About.paragraph === "string" &&
    data.About.paragraph.trim().length > 0
      ? data.About.paragraph
      : "Somos Yeyu Baby Store, una tienda virtual dedicada a traer juguetes didácticos, ropa y accesorios para bebés...";

  return (
    <div className="yb-page yb-page-about">
      <Helmet>
        <title>Nosotros | Yeyu Baby Store</title>
        <meta
          name="description"
          content="Conoce Yeyu Baby Store: tienda virtual de productos para bebés en Perú, con foco en seguridad, comodidad y desarrollo temprano."
        />
        <link rel="canonical" href="https://yeyubabystore.com/nosotros" />
      </Helmet>

      <div className="container">
        <h1>Nosotros</h1>
        <p>{paragraph}</p>

        <LazyImage
          src="/img/nosotros/yeyubabystore_web_03.png"
          alt="Yeyu Baby Store"
          className="img-responsive"
          style={{ marginTop: 30 }}
        />
      </div>
    </div>
  );
};
