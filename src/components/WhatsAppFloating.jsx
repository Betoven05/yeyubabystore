// src/components/WhatsAppFloating.jsx
import React from "react";

const WHATSAPP_NUMBER = "51945307158";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}`;

export const WhatsAppFloating = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="yb-whatsapp-floating"
      aria-label="Escríbenos por WhatsApp"
    >
      <i className="fa fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
};
