import React from "react";
import { Header } from "../components/header";
import { TopSellers } from "../components/TopSellers";
import { InstagramFeed } from "../components/InstagramFeed";

export const Home = ({ data }) => {
  return (
    <div className="yb-page">
      <Header data={data.Header} />
      <TopSellers />
      <InstagramFeed />
    </div>
  );
};
