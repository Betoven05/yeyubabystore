import React from "react";
import { Header } from "../components/header";

export const Home = ({ data }) => {
  return (
    <>
      <Header data={data.Header} />
    </>
  );
};
