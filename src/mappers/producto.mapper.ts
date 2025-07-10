import { producto } from "@prisma/client";
import { Producto } from "../models/producto";

export const fromPrismaProducto = (producto: producto) => {
  return {
    idProducto: producto.id_producto,
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    idProveedor: producto.id_proveedor,
    estadoAuditoria: producto.estado_auditoria,
    fechaCreacion: producto.fecha_creacion ? new Date(producto.fecha_creacion) : null,
    fechaActualizacion: producto.fecha_actualizacion ? new Date(producto.fecha_actualizacion) : null
  };
}

export const toPrismaProducto = (producto: Producto) => {
  return {
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio,
    id_proveedor: producto.idProveedor,
    fecha_actualizacion: producto.fechaActualizacion ? producto.fechaActualizacion.toISOString() : null
  };
}