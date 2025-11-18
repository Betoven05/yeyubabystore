import React from "react";

export const Footer = () => {
  return (
    <div>
      {/* Sección principal de información */}
      <div id="footer-info">
        <div className="container">
          <div className="row">
            {/* Envíos a todo el Perú */}
            <div className="col-md-3 col-sm-6">
              <h4>Envíos a todo el Perú</h4>
              <p>
                Los envíos para Lima Metropolitana son de <strong>24 a 48 horas</strong>.
                Para provincias, de <strong>2 a 3 días hábiles</strong> una vez confirmado el pago.
              </p>
            </div>

            {/* Pago y entrega coordinada */}
            <div className="col-md-3 col-sm-6">
              <h4>Pago y entrega coordinada</h4>
              <p>
                Realizamos <strong>entregas contraentrega coordinadas</strong> en puntos seguros de Lima
                y envíos a provincia mediante empresas de mensajería. Coordinamos los detalles por WhatsApp
                para tu mayor comodidad.
              </p>
            </div>

            {/* Nosotros */}
            <div className="col-md-3 col-sm-6">
              <h4>Nosotros</h4>
              <p>
                Somos <strong>Yeyu Baby Store</strong>, una tienda online especializada en productos
                para bebés: juguetes didácticos, ropa y accesorios pensados para acompañar cada etapa
                de tu peque.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="col-md-3 col-sm-6">
              <h4>Atención y contacto</h4>
              <p>
                <strong>Horario de atención:</strong>
                <br />
                Lunes a sábado: 9:00 a.m. – 7:00 p.m.
              </p>
              <p>
                <strong>Dirección:</strong>
                <br />
                Los Olivos – Lima – Perú
              </p>
              <p>
                <strong>Teléfono / WhatsApp:</strong>
                <br />
                <a href="https://wa.me/51945307158" target="_blank" rel="noreferrer">
                  +51 945 307 158
                </a>
              </p>
              <p>
                <strong>Síguenos en:</strong>
              </p>
              <div className="social">
                <ul>
                  <li>
                    <i className="fa fa-instagram"></i>{" "}
                    <a
                      href="https://www.instagram.com/yeyubabystore"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @yeyubabystore
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-facebook"></i>{" "}
                    <a
                      href="https://www.facebook.com/yeyubabystore"
                      target="_blank"
                      rel="noreferrer"
                    >
                      /yeyubabystore
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-whatsapp"></i>{" "}
                    <a
                      href="https://wa.me/51945307158"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp Yeyu Baby Store
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Franja inferior de copyright */}
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Yeyu Baby Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
