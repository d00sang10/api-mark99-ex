import { venta } from '@prisma/client';
import { Venta } from '../models/venta';

export const fromPrismaVenta= (venta: venta) => {
  return {
    idVenta: venta.id_venta,
    idCliente: venta.id_cliente,
    total: venta.total,
    estadoAuditoria: venta.estado_auditoria,
    fechaCreacion: venta.fecha_creacion ? new Date(venta.fecha_creacion) : null,
    fechaActualizacion: venta.fecha_actualizacion ? new Date(venta.fecha_actualizacion) : null
  };
}

export const toPrismaVenta = (venta: Venta) => {
  return {
    id_cliente: venta.idCliente,
    total: venta.total,
    fecha_actualizacion: venta.fechaActualizacion ? venta.fechaActualizacion.toISOString() : null
  };
}