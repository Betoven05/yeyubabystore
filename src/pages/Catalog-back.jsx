import React from "react";
import JsonData from "../data/data.json";

export const Catalog = () => {
  const products = JsonData.Products;

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h2>Catálogo</h2>
      <p>Descubre nuestros productos para bebés 🍼✨</p>

      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 col-sm-6" style={{ marginBottom: 30 }}>
            <div className="card">
              <img src={p.image} alt={p.name} className="img-fluid" />
              <h4>{p.name}</h4>
              <a href={`/producto/${p.id}`} className="btn btn-custom">
                Ver producto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
