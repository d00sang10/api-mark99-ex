import morgan from 'morgan';
import express, { Application } from 'express';
import cors from 'cors';
import config from './config/env';

import clienteRoutes from './routes/clienteRoute';
import proveedorRoutes from './routes/proveedorRoute';
import productoRoutes from './routes/productoRoute';
import inventarioRoute from './routes/InventarioRoute';
import ventaRoute from './routes/ventaRoute';
import detalleVentaRoute from './routes/detalleVentaRoute';

import authRouter from './routes/authRouter';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


app.use(`${config.API_PREFIX}/clientes`, clienteRoutes);
app.use(`${config.API_PREFIX}/proveedores`, proveedorRoutes);
app.use(`${config.API_PREFIX}/productos`, productoRoutes);
app.use(`${config.API_PREFIX}/inventarios`, inventarioRoute);
app.use(`${config.API_PREFIX}/ventas`, ventaRoute);
app.use(`${config.API_PREFIX}/detalles`, detalleVentaRoute);

app.use(`${config.API_PREFIX}/auth`, authRouter);

app.use(`${config.API_PREFIX}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
