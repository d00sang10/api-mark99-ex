# API Mark99

La API _Mark99_ es una aplicación desarrollada en TypeScript con Express y Prisma que permite gestionar de manera eficiente los elementos clave de un sistema de inventarios, incluyendo clientes, proveedores, productos, users, ventas y sus respectivos detalles. Esta API está diseñada para integrarse fácilmente con sistemas frontend o móviles, brindando una base sólida para automatizar y controlar procesos comerciales esenciales.
## 1. Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **TypeScript** – Superset de JavaScript que añade tipado estático.
- **Express** – Framework web minimalista y flexible para Node.js.
- **Prisma ORM** – Herramienta moderna para la manipulación de bases de datos relacionales.
- **PostgreSQL** – Sistema de gestión de bases de datos relacional.
- **Joi** – Biblioteca de validación de esquemas de datos.
- **JWT (JSON Web Tokens)** – Mecanismo seguro para autenticación y autorización.
- **dotenv** – Gestión de variables de entorno.
- **bcrypt** – Hashing de contraseñas de forma segura.

## 2. Instrucciones de Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/mark99-api.git
cd mark99-api
```

### 2. Instala las dependencias

```bash

npm install
```
### 3. Configura las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/mark99
PORT=3000
API_PREFIX="/api/V1"
JWT_SECRET=tu_clave_secreta 
```

### 4. Ejecuta las migraciones de Prisma

```ts
npx prisma migrate dev --name init

/* Recomendable */
npx prisma generate
```

### 5. Inicia el servidor en modo desarrollo

```
npm run dev
```

El servidor estará disponible en: http://localhost:3000/api/v1/ruta-del-endpoint-a-acceder

## 3. Rutas principales de la API.
1. **Clientes (`/clientes`)**

- `GET /clientes` – Listar todos los clientes
    
- `GET /clientes/:id` – Obtener un cliente por ID
    
- `POST /clientes` – Crear un nuevo cliente
    
- `PUT /clientes/:id` – Actualizar información de un cliente
    
- `DELETE /clientes/:id` – Eliminar un cliente

 2. **Proveedores (`/proveedores`)**

- `GET /proveedores` – Listar todos los proveedores
    
- `GET /proveedores/:id` – Obtener un proveedor por ID
    
- `POST /proveedores` – Crear un nuevo proveedor
    
- `PUT /proveedores/:id` – Actualizar información de un proveedor
    
- `DELETE /proveedores/:id` – Eliminar un proveedor
    


 3. **Productos (`/productos`)**

- `GET /productos` – Listar todos los productos
    
- `GET /productos/:id` – Obtener un producto por ID
    
- `POST /productos` – Crear un nuevo producto
    
- `PUT /productos/:id` – Actualizar información de un producto
    
- `DELETE /productos/:id` – Eliminar un producto
    



 4. **Inventario (`/inventarios`)**

- `GET /inventarios` – Ver el inventario completo
    
- `GET /inventarios/:id` – Ver stock de un producto específico
    
- `POST /inventarios` – Crear registro de inventario
    
- `PUT /inventarios/:id` – Actualizar stock de un producto
    
- `DELETE /inventarios/:id` – Eliminar registro de inventario (si aplica)
    



 5. **Ventas (`/ventas`)**

- `GET /ventas` – Listar todas las ventas
    
- `GET /ventas/:id` – Ver detalles de una venta
    
- `POST /ventas` – Registrar una nueva venta
    
- `PUT /ventas/:id` – Actualizar datos de una venta 
    
- `DELETE /ventas/:id` – Eliminar una venta
    



 6. **Detalle de Venta (`/detalles`)**

- `GET /detalle-ventas` – Listar todos los detalles de ventas
    
- `GET /detalle-ventas/:id` – Ver un detalle de venta específico
    
- `POST /detalle-ventas` – Agregar productos a una venta
    
- `PUT /detalle-ventas/:id` – Actualizar un producto dentro de una venta
    
- `DELETE /detalle-ventas/:id` – Eliminar un detalle de venta

 7. **User (`/auth`)**

- `POST /auth/login` – Loguea al usuario 
    
- `POST /auth/register` – Registra al usuario
