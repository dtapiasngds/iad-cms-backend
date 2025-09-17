const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { setupProxies } = require('./routes/index');

// Tipos importados para TypeScript (no afectan el código JavaScript final)
import type { Application, Request, Response } from 'express';

// Carga las variables de entorno inmediatamente
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Gateway is running! 🚀');
});

// Llama a la función que configura los proxies
setupProxies(app);

app.listen(PORT, () => {
  console.log(`✅ API Gateway listening on port ${PORT}`);
  console.log(`➡️  Proxying requests to: ${process.env.STRAPI_API_URL}`);
});