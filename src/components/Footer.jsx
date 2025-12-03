import React from "react";

export const Footer = () => {
  return (
    <div>
      {/* Sección principal de información */}
      <div id="footer-info" style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row">
            {/* Envíos a todo el Perú */}
            <div className="col-xs-6 col-sm-6 col-md-3 footer-feature">
              <img src="/img/icons/envios.png" alt="Envíos" className="yb-footer-icon" />
              <h4>Envíos a todo el Perú</h4>
              <p>
                Los envíos para Lima Metropolitana son de <strong>24 a 48 horas</strong>.
                Para provincias, de <strong>2 a 3 días hábiles</strong> una vez confirmado el pago.
              </p>
            </div>

            {/* Pago y entrega coordinada */}
            <div className="col-xs-6 col-sm-6 col-md-3 footer-feature">
              <img src="/img/icons/pagos.png" alt="Pagos" className="yb-footer-icon" />
              <h4>Pago y entrega coordinada</h4>
              <p>
                Realizamos <strong>entregas contraentrega coordinadas</strong> en puntos seguros de Lima
                . Coordinamos los detalles por WhatsApp para tu mayor comodidad.
              </p>
            </div>

            {/* Nosotros */}
            <div className="col-xs-6 col-sm-6 col-md-3 footer-feature">
              <img src="/img/icons/nosotros.png" alt="Nosotros" className="yb-footer-icon" />
              <h4>Nosotros</h4>
              <p>
                Somos <strong>Yeyu Baby Store</strong>, una tienda online especializada en productos
                para bebés: juguetes didácticos, ropa y accesorios pensados para acompañar cada etapa
                de tu peque.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="col-xs-6 col-sm-6 col-md-3 footer-feature">
              <img src="/img/icons/atencion.png" alt="Atención" className="yb-footer-icon" />
              <h4>Atención y contacto</h4>
              <p>
                <strong>Horario de atención:</strong>
                <br />
                Lunes a sábado: 9:00 a.m. – 7:00 p.m.
              </p>
              {/*<p>
                <strong>Dirección:</strong>
                <br />
                Los Olivos – Lima – Perú
              </p>*/}
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
                    <a
                      href="https://www.instagram.com/yeyubabystore"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Yeyu Baby Store"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/yeyubabystore"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook Yeyu Baby Store"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/51945307158"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp Yeyu Baby Store"
                    >
                      <i className="fa fa-whatsapp" />
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
