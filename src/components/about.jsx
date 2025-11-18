import React from "react";

export const About = (props) => {
  return (
    <div id="nosotros">
      <div className="container">
        <div className="row">
          {/* Imagen */}
          <div className="col-xs-12 col-md-6">
            <img
              src="img/ProfilePicGreySweatshirtBayPicCropped.jpg"
              className="img-responsive"
              alt="Foto del equipo de Yeyu Baby Store"
            />
          </div>

          {/* Texto */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
