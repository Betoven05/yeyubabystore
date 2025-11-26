// src/pages/About.jsx
import React from "react";
import { LazyImage } from "../components/LazyImage";

export const AboutPage = ({ data }) => {
  const paragraph =
    data &&
    data.About &&
    typeof data.About.paragraph === "string" &&
    data.About.paragraph.trim().length > 0
      ? data.About.paragraph
      : "Somos Yeyu Baby Store, una tienda virtual dedicada a traer juguetes didácticos, ropa y accesorios para bebés. Elegimos cada producto pensando en la comodidad, seguridad y desarrollo de los más pequeños.";

  return (
    <div className="yb-page yb-page-about">
      <div className="container">
        <h2>Nosotros</h2>
        <p>{paragraph}</p>

        <LazyImage
          src="/img/yeyubabystore_web_03.png"
          alt="Yeyu Baby Store"
          className="img-responsive"
          style={{ marginTop: 30 }}
        />
      </div>
    </div>
  );
};
