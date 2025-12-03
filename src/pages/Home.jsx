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
      </Helmet>

      <Header data={data.Header} />
      <TopSellers />
      <InstagramFeed />
    </div>
  );
};
