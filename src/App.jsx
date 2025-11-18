import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Catalog } from "./components/Catalog";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [currentSection, setCurrentSection] = useState("inicio");

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* INICIO */}
      {currentSection === "inicio" && (
        <Header data={landingPageData.Header} />
      )}

      {/* CATALOGO */}
      {currentSection === "catalogo" && (
        <Catalog products={landingPageData.Products} />
      )}

      {/* NOSOTROS */}
      {currentSection === "nosotros" && (
        <About data={landingPageData.About} />
      )}

      {/* FOOTER siempre visible */}
      <Footer />
    </div>
  );
};

export default App;
