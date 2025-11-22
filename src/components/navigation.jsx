import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
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
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catalogo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Catálogo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nosotros"
                className={({ isActive }) => (isActive ? "active" : "")}
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
