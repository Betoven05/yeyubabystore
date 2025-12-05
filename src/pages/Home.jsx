// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { TopSellers } from "../components/TopSellers";
import { InstagramFeed } from "../components/InstagramFeed";

export const Home = ({ data }) => {
  return (
    <div className="yb-page">
      <Helmet>
        <title>Yeyu Baby Store | Productos para bebés en Perú</title>
        <meta
          name="description"
          content="Tienda online de productos para bebés en Perú: tarjetas Montessori, juguetes sensoriales, aquashoes, ropa y más. Envíos a todo el Perú."
        />
        <link rel="canonical" href="https://yeyubabystore.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yeyu Baby Store | Productos para bebés en Perú" />
        <meta
          property="og:description"
          content="Descubre productos seleccionados para tu bebé: Montessori, sensoriales, aquashoes, ropa y más. Envíos a todo el Perú."
        />
        <meta property="og:url" content="https://yeyubabystore.com/" />
        <meta
          property="og:image"
          content="https://yeyubabystore.com/img/yeyubabystore_web_01.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yeyu Baby Store | Productos para bebés en Perú" />
        <meta
          name="twitter:description"
          content="Productos para bebés: juguetes, ropa, aquashoes, Montessori y más. Envíos a todo el Perú."
        />
        <meta
          name="twitter:image"
          content="https://yeyubabystore.com/img/yeyubabystore_web_01.png"
        />
      </Helmet>
      <Header data={data.Header} />
      <TopSellers />
      <InstagramFeed />
    </div>
  );
};
