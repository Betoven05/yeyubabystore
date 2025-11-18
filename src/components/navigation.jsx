import React from "react";

export const Navigation = ({ currentSection, onSectionChange }) => {
  const handleClick = (e, section) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  const isActive = (section) =>
    currentSection === section ? "active" : "";

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

          {/* Marca / logo texto */}
          <a
            className="navbar-brand page-scroll"
            href="#"
            onClick={(e) => handleClick(e, "inicio")}
          >
            Yeyu Baby Store
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-main">
          <ul className="nav navbar-nav navbar-right">
            <li className={isActive("inicio")}>
              <a href="#" onClick={(e) => handleClick(e, "inicio")}>
                Inicio
              </a>
            </li>
            <li className={isActive("catalogo")}>
              <a href="#" onClick={(e) => handleClick(e, "catalogo")}>
                Catálogo
              </a>
            </li>
            <li className={isActive("nosotros")}>
              <a href="#" onClick={(e) => handleClick(e, "nosotros")}>
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
