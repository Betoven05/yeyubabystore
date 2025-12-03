import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const handleNavItemClick = () => {
    const navbarCollapse = document.getElementById("navbar-main");
    const navbarToggle = document.querySelector(".navbar-toggle");

    // Solo colapsar si estamos en móvil (el botón es visible)
    if (
      navbarCollapse &&
      navbarCollapse.classList.contains("in") && // abierto
      navbarToggle &&
      window.getComputedStyle(navbarToggle).display !== "none"
    ) {
      navbarCollapse.classList.remove("in");
      navbarToggle.classList.add("collapsed");
    }
  };

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

          <Link className="navbar-brand page-scroll" to="/">
            Yeyu Baby Store
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar-main">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink
                end
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavItemClick}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalogo"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavItemClick}
              >
                Catálogo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleNavItemClick}
              >
                Nosotros
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
