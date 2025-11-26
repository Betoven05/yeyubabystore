import React from "react";
import { LazyImage } from "../components/LazyImage";

export const AboutPage = ({ data }) => {
  return (
    <div className="yb-page-about">
      <div className="container">
        <h2>Nosotros</h2>
        <p>{data.About.paragraph}</p>

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
