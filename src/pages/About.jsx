// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { LazyImage } from "../components/LazyImage";

export const AboutPage = ({ data }) => {
  const paragraph =
    data &&
    data.About &&
    typeof data.About.paragraph === "string" &&
    data.About.paragraph.trim().length > 0
      ? data.About.paragraph
      : "Somos Yeyu Baby Store, una tienda virtual dedicada a traer juguetes didácticos, ropa y accesorios para bebés. Elegimos cada producto pensando en la comodidad, seguridad y desarrollo de los más pequeños.";

  return (
    <div className="yb-page yb-page-about">
      <Helmet>
        <title>Nosotros | Yeyu Baby Store</title>
        <meta
          name="description"
          content="Conoce Yeyu Baby Store: tienda virtual de productos para bebés en Perú, con foco en seguridad, comodidad y desarrollo temprano."
        />
        <link rel="canonical" href="https://yeyubabystore.com/nosotros" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nosotros | Yeyu Baby Store" />
        <meta
          property="og:description"
          content="Conoce la historia y la misión de Yeyu Baby Store, una tienda pensada para acompañar a tu bebé en cada etapa."
        />
        <meta
          property="og:url"
          content="https://yeyubabystore.com/nosotros"
        />
        <meta
          property="og:image"
          content="https://yeyubabystore.com/img/nosotros/yeyubabystore_web_10.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nosotros | Yeyu Baby Store" />
        <meta
          name="twitter:description"
          content="Conoce la historia y la misión de Yeyu Baby Store, una tienda pensada para acompañar a tu bebé en cada etapa."
        />
        <meta
          name="twitter:image"
          content="https://yeyubabystore.com/img/nosotros/yeyubabystore_web_10.jpg"
        />
      </Helmet>

      <div className="container yb-about-container" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="row yb-about-hero">
          <div className="col-md-6">
            <h1>Nosotros</h1>
            <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.7 }}>
              {paragraph}
            </p>
            <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7 }}>
              Sabemos que cada compra para tu bebé es especial, por eso
              seleccionamos productos prácticos, lindos y pensados para las
              distintas etapas: desde los primeros meses hasta sus primeras
              aventuras.
            </p>

            <ul
              style={{
                marginTop: 20,
                paddingLeft: 18,
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              <li>Productos seleccionados uno a uno, no catálogo masivo.</li>
              <li>Prioridad en seguridad, comodidad y estimulación temprana.</li>
              <li>Atención cercana por WhatsApp para resolver tus dudas.</li>
            </ul>
          </div>

          <div className="col-md-6">
            <LazyImage
              src="/img/nosotros/yeyubabystore_web_10.jpg"
              alt="Yeyu Baby Store - productos para bebés"
              className="img-responsive"
              style={{
                marginTop: 20,
                borderRadius: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        </div>

        {/* Nuestra promesa */}
        <div
          className="yb-about-promise"
          style={{ marginTop: 50, borderTop: "1px solid #eee", paddingTop: 40 }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 25 }}>Nuestra promesa para ti</h2>

          <div className="row">
            <div className="col-sm-4">
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Productos que usaríamos con nuestro propio bebé
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                Elegimos cada artículo como si fuera para nuestra familia.
                Revisamos materiales, acabados y funcionalidad antes de
                incluirlo en el catálogo.
              </p>
            </div>

            <div className="col-sm-4">
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Comunicación clara y cercana
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                Te atendemos por WhatsApp para coordinar colores, modelos,
                fechas de entrega y todas las dudas que puedas tener antes de
                comprar.
              </p>
            </div>

            <div className="col-sm-4">
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                Envíos a todo el Perú
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                Hacemos envíos a Lima y provincias, cuidando el empaquetado
                para que los productos lleguen en perfecto estado, listos para
                usarse o para regalar.
              </p>
            </div>
          </div>
        </div>

        {/* Cómo trabajamos */}
        <div
          className="yb-about-how"
          style={{ marginTop: 50, borderTop: "1px solid #eee", paddingTop: 40 }}
        >
          <h2 style={{ fontSize: 20, marginBottom: 20 }}>¿Cómo trabajamos?</h2>
          <p style={{ fontSize: 14, lineHeight: 1.7 }}>
            Nuestro proceso es simple y pensado para que te sientas acompañada
            en todo momento:
          </p>

          <ol
            style={{
              marginTop: 15,
              paddingLeft: 20,
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            <li>Revisas nuestro catálogo y eliges tus productos favoritos.</li>
            <li>Nos escribes por WhatsApp para coordinar colores, stock y envío.</li>
            <li>Confirmamos tu pedido y te compartimos los datos de pago.</li>
            <li>Preparamos tu compra con cariño y la enviamos a la dirección acordada.</li>
          </ol>
        </div>

        <div
          className="yb-about-cta"
          style={{ marginTop: 50, textAlign: "center" }}
        >
          <p style={{ fontSize: 15, marginBottom: 15 }}>
            Si tienes alguna duda sobre tallas, materiales o ideas de regalo,
            estaremos encantados de ayudarte.
          </p>
          <a
            href="/catalogo"
            className="btn btn-custom btn-lg"
          >
            Ver catálogo
          </a>
        </div>
      </div>
    </div>
  );
};
