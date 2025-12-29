// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navigation from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./components/Catalog";
import { AboutPage } from "./pages/About";
import { Product } from "./pages/Product";
import JsonData from "./data/data.json";
import ScrollToTop from "./components/ScrollToTop";
import { WhatsAppFloating } from "./components/WhatsAppFloating";

const helmetContext = {};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <ScrollToTop />

        <Navigation />

        <Routes>
          <Route path="/" element={<Home data={landingPageData} />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/nosotros" element={<AboutPage data={landingPageData} />} />
          <Route path="/producto/:id" element={<Product />} />
        </Routes>
        <WhatsAppFloating />
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
