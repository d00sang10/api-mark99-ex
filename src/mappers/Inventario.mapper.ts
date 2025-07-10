import { inventario } from '@prisma/client';
import { Inventario } from '../models/inventario';
export const fromPrismaInventario = (inventario: inventario) => {
  return {
    idProducto: inventario.id_producto,
    stock: inventario.stock,
    estadoAuditoria: inventario.estado_auditoria,
    fechaCreacion: inventario.fecha_creacion ? new Date(inventario.fecha_creacion) : null,
    fechaActualizacion: inventario.fecha_actualizacion ? new Date(inventario.fecha_actualizacion) : null
  };
}

export const toPrismaInventario = (inventario: Inventario) => {
  return {
    id_producto: inventario.idProducto,
    stock: inventario.stock,
    fecha_actualizacion: inventario.fechaActualizacion ? inventario.fechaActualizacion.toISOString() : null
  };
}