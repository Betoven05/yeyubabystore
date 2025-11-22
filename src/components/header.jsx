import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const { data } = props;

  return (
    <header id="inicio">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1>
                  {data ? data.title : "Yeyu Baby Store"}
                  <span></span>
                </h1>

                <p>
                  {data
                    ? data.paragraph
                    : "Productos seleccionados para acompañar cada etapa de tu bebé."}
                </p>

                <Link
                  to="/catalogo"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Ver catálogo
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
