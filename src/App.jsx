import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";
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
        <div
          id="catalogo"
          className="text-center"
          style={{ padding: "60px 0" }}
        >
          <div className="container">
            <h2>Catálogo</h2>
            <p>
              Muy pronto encontrarás aquí todos los productos de Yeyu Baby
              Store: tarjetas Montessori, aquashoes, libros, juguetes
              sensoriales y más 🐣✨
            </p>
          </div>
        </div>
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
