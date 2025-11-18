import { Footer } from "./components/footer";

return (
  <div>
    <Navigation />

    {/* INICIO */}
    <Header data={landingPageData.Header} />

    {/* CATALOGO */}
    <div id="catalogo" className="text-center" style={{ padding: "60px 0" }}>
      <div className="container">
        <h2>Catálogo</h2>
        <p>
          Muy pronto encontrarás aquí todos los productos de Yeyu Baby Store:
          tarjetas Montessori, aquashoes, libros, juguetes sensoriales y más 🐣✨
        </p>
      </div>
    </div>

    {/* NOSOTROS */}
    <About data={landingPageData.About} />

    {/* FOOTER */}
    <Footer />
  </div>
);
