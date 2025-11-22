import React from "react";
import { useParams, Link } from "react-router-dom";
import JsonData from "../data/data.json";

export const Product = () => {
  const { id } = useParams();
  const product = JsonData.Products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: "120px 0 60px" }}>
        <h2>Producto no encontrado</h2>
        <p>
          El producto que buscas no existe o ha sido retirado del catálogo.
        </p>
        <Link to="/catalogo" className="btn btn-custom">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const whatsappNumber = "51945307158"; 

  const message = `Hola, quiero más información sobre el producto: ${product.name}`;

  return (
    <div className="container" style={{ padding: "120px 0 60px" }}>
      <p style={{ marginBottom: 10, fontSize: 13 }}>
        <Link to="/">Inicio</Link> &gt;{" "}
        <Link to="/catalogo">Catálogo</Link> &gt;{" "}
        <span>{product.name}</span>
      </p>

      <div className="row">
        <div className="col-md-5">
          <img
            src={`/${product.image}`}
            alt={`${product.name} - Yeyu Baby Store`}
            className="img-responsive"
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              marginBottom: 20,
            }}
          />
        </div>

        <div className="col-md-7">
          <h2 style={{ marginTop: 0 }}>{product.name}</h2>

          <p style={{ color: "#777", fontSize: 14 }}>
            <strong>Categoría:</strong> {product.category.join(" · ")}
            {product.tag ? ` · ${product.tag}` : ""}
          </p>

          <p style={{ marginTop: 20, whiteSpace: "pre-line" }}>
            {product.description}
          </p>

          <p style={{ marginTop: 30, fontSize: 14 }}>
            ¿Te interesa este producto? Escríbenos por WhatsApp y te contamos
            sobre precios, colores y stock disponible.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
