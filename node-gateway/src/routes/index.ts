const { createProxyMiddleware } = require('http-proxy-middleware');

// Tipos importados para TypeScript
import type { Application } from 'express';

const setupProxies = (app: Application) => {
  const strapiApiUrl = process.env.STRAPI_API_URL;

  if (!strapiApiUrl) {
    throw new Error('FATAL ERROR: STRAPI_API_URL no está definida en el archivo .env.');
  }

  const strapiProxy = createProxyMiddleware({
    target: strapiApiUrl,
    changeOrigin: true,
    pathRewrite: {
      '^/strapi': '',
    },
    onError: (err, req, res) => {
        console.error('Proxy Error:', err);
    }
  });

  app.use('/strapi', strapiProxy);
};

// Exportamos la función para que pueda ser requerida en otros archivos
module.exports = {
  setupProxies,
};