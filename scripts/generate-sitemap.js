// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");

const SITE_URL = "https://yeyubabystore.com";

// rutas fijas del sitio
const staticRoutes = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/catalogo", priority: "0.8", changefreq: "weekly" },
  { loc: "/nosotros", priority: "0.5", changefreq: "monthly" },
];

// cargar data.json
const dataPath = path.join(__dirname, "../src/data/data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const products = (data.Products || []).filter(
  (p) => p.isActive !== false && p.id
);

// construir XML
const urls = [];

// rutas estáticas
staticRoutes.forEach((route) => {
  urls.push(`
  <url>
    <loc>${SITE_URL}${route.loc}</loc>
    <priority>${route.priority}</priority>
    <changefreq>${route.changefreq}</changefreq>
  </url>`);
});

// rutas dinámicas de producto
products.forEach((product) => {
  urls.push(`
  <url>
    <loc>${SITE_URL}/producto/${product.id}</loc>
    <priority>0.7</priority>
    <changefreq>weekly</changefreq>
  </url>`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outputPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

console.log("✅ Sitemap generado correctamente");
