import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* Logo / nombre marca */}
          <a className="navbar-brand page-scroll" href="#inicio">
            Yeyu Baby Store
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-main">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#inicio" className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#catalogo" className="page-scroll">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#nosotros" className="page-scroll">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
