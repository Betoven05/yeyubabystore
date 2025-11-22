import React from "react";

export const Header = (props) => {
  return (
    <header id="inicio">
      <div
        id="yb-hero-carousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="6000"
      >
        {/* Puntos inferiores */}
        <ol className="carousel-indicators">
          <li
            data-target="#yb-hero-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#yb-hero-carousel" data-slide-to="1"></li>
          <li data-target="#yb-hero-carousel" data-slide-to="2"></li>
        </ol>

        {/* Slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src="/img/banner/banner_01.png"
              className="yb-hero-img"
              alt="Productos para bebés - Yeyu Baby Store 1"
            />
          </div>
          <div className="item">
            <img
              src="/img/banner/banner_02.png"
              className="yb-hero-img"
              alt="Productos para bebés - Yeyu Baby Store 2"
            />
          </div>
          <div className="item">
            <img
              src="/img/banner/banner_03.png"
              className="yb-hero-img"
              alt="Productos para bebés - Yeyu Baby Store 3"
            />
          </div>
        </div>

        {/* Flechas banner */}
        <a
          className="left carousel-control"
          href="#yb-hero-carousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
          <span className="sr-only">Anterior</span>
        </a>

        <a
          className="right carousel-control"
          href="#yb-hero-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
          <span className="sr-only">Siguiente</span>
        </a>

        {/* Texto encima del banner */}
        <div className="yb-hero-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">

                {/* --- Ocultamos título y descripción del banner --- */}
                {/*
                <h1>
                  {props.data ? props.data.title || "Yeyu Baby Store" : "Yeyu Baby Store"}
                </h1>

                <p>
                  {props.data
                    ? props.data.paragraph || "Juguetes, ropa y más para bebés."
                    : "Juguetes, ropa y más para bebés."}
                </p>
                */}

                {/* Botón visible */}
                <a
                  href="/catalogo"
                  className="btn btn-custom btn-lg"
                >
                  Ver catálogo
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
