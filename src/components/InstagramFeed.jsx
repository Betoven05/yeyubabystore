// src/components/InstagramFeed.jsx
import React from "react";
import { LazyImage } from "./LazyImage";

const INSTAGRAM_PROFILE = "https://www.instagram.com/yeyubabystore";

const INSTAGRAM_POSTS = [
  {
    id: "insta-1",
    image: "/img/instagram/instagram-yeyu-01.png",
    link: "https://www.instagram.com/p/DRa5KyMEakJ/",
    alt: "Post de Instagram Yeyu Baby Store 1",
  },
  {
    id: "insta-2",
    image: "/img/instagram/instagram-yeyu-02.png",
    link: "https://www.instagram.com/p/DQx0yvaEW5b/",
    alt: "Post de Instagram Yeyu Baby Store 2",
  },
  {
    id: "insta-3",
    image: "/img/instagram/instagram-yeyu-03.png",
    link: "https://www.instagram.com/p/DQnpORRDIxD/",
    alt: "Post de Instagram Yeyu Baby Store 3",
  },
];

export const InstagramFeed = () => {
  if (!INSTAGRAM_POSTS.length) return null;

  return (
    <section id="siguenos-instagram" className="yb-instagram-section">
      <div className="container">
        <h2 className="yb-instagram-title">Síguenos en Instagram</h2>
        <p className="yb-instagram-subtitle">
          Descubre más fotos, ideas y novedades para tu bebé en nuestro día a día 🧸✨
        </p>

        <div className="row yb-instagram-grid">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="col-xs-4 col-sm-4 col-md-4 yb-instagram-item"
            >
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="yb-instagram-link"
                aria-label="Ver publicación en Instagram"
              >
                <div className="yb-instagram-image-wrapper">
                  <LazyImage
                    src={post.image}
                    alt={post.alt}
                    className="img-responsive yb-instagram-image"
                  />
                  <div className="yb-instagram-overlay">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="yb-instagram-cta">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-custom btn-sm"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
