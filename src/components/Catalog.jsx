import React from "react";

export const Catalog = ({ products = [] }) => {
  return (
    <div
      id="catalogo"
      className="text-center"
      style={{ padding: "60px 0" }}
    >
      <div className="container">
        <h2>Catálogo</h2>
        <p>
          Explora algunos de nuestros productos. Escríbenos por WhatsApp
          para conocer precios, colores y disponibilidad.
        </p>

        <div className="row" style={{ marginTop: "30px" }}>
          {products.length === 0 && (
            <div className="col-md-12">
              <p>Pronto estaremos agregando más productos a nuestro catálogo 🐣</p>
            </div>
          )}

          {products.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-3">
              <div className="thumbnail yb-product-card">
                {product.image && (
                  <img
                    src={product.image}
                    alt={`${product.name} - Yeyu Baby Store`}
                    className="img-responsive"
                  />
                )}
                <div className="caption">
                  <h4>{product.name}</h4>
                  <p className="yb-product-category">
                    {product.category}
                  </p>
                  {product.isSale && (
                    <span className="label label-danger">SALE</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
