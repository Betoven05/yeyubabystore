import React from "react";

export const Header = (props) => {
  return (
    <header id="inicio">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                <h1>
                  {props.data ? props.data.title : "Yeyu Baby Store"}
                  <span></span>
                </h1>

                <p>
                  {props.data
                    ? props.data.paragraph
                    : "Productos seleccionados para acompañar cada etapa de tu bebé."}
                </p>

                <a
                  href="#catalogo"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Ver catálogo
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
