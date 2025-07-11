-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100),
    "telefono" VARCHAR(15),
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id_proveedor" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "contacto" VARCHAR(50),
    "telefono" VARCHAR(20),
    "email" VARCHAR(100),
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id_proveedor")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_producto" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(10,2) NOT NULL,
    "id_proveedor" INTEGER,
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "inventario" (
    "id_producto" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "venta" (
    "id_venta" SERIAL NOT NULL,
    "id_cliente" INTEGER,
    "total" DECIMAL(10,2),
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "venta_pkey" PRIMARY KEY ("id_venta")
);

-- CreateTable
CREATE TABLE "detalle_venta" (
    "id_detalle" SERIAL NOT NULL,
    "id_venta" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "estado_auditoria" CHAR(1) DEFAULT '1',
    "fecha_creacion" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(6),

    CONSTRAINT "detalle_venta_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_email_key" ON "cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "fk_producto_proveedor" FOREIGN KEY ("id_proveedor") REFERENCES "proveedor"("id_proveedor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "fk_inventario_producto" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "venta" ADD CONSTRAINT "fk_venta_cliente" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_venta" ADD CONSTRAINT "fk_detalle_venta" FOREIGN KEY ("id_venta") REFERENCES "venta"("id_venta") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_venta" ADD CONSTRAINT "fk_detalle_producto" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE CASCADE ON UPDATE CASCADE;
