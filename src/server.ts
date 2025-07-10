// import app from "./app";

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`App escuchando en puerto ${PORT}`));

import app from './app';
import config from './config/env';

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${config.PORT}`);
});

console.log('Variables cargadas:');
console.log('API_PREFIX:', config.API_PREFIX);
console.log('PORT:', config.PORT);
console.log('DATABASE_URL:', config.DATABASE_URL);