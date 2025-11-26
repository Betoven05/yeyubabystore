import React from "react";
import { Header } from "../components/header";
import { TopSellers } from "../components/TopSellers";

export const Home = ({ data }) => {
  return (
    <div className="yb-page">
      <Header data={data.Header} />
      <TopSellers />
    </div>
  );
};
