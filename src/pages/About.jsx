import React from "react";

export const AboutPage = ({ data }) => {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h2>Nosotros</h2>
      <p>{data.About.paragraph}</p>

      <img
        src="img/yeyubabystore_web_03.png"
        alt="Yeyu Baby Store"
        className="img-responsive"
        style={{ marginTop: 30 }}
      />
    </div>
  );
};
