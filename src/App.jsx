import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import { Footer } from "./components/footer";
import { Home } from "./pages/Home";
import { Catalog } from "./components/Catalog";
import { AboutPage } from "./pages/About";
import { Product } from "./pages/Product";
import JsonData from "./data/data.json";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <ScrollToTop />  
      
      <Navigation />

      <Routes>
        <Route path="/" element={<Home data={landingPageData} />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/nosotros" element={<AboutPage data={landingPageData} />} />
        <Route path="/producto/:id" element={<Product />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
