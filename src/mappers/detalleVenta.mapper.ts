import { detalle_venta } from "@prisma/client";
import { DetalleVenta } from "../models/detalleVenta";

export const fromPrismaDetalleVenta = (detalleVenta: detalle_venta) => {
    return {
        idDetalle: detalleVenta.id_detalle,
        idVenta: detalleVenta.id_venta,
        idProducto: detalleVenta.id_producto,
        cantidad: detalleVenta.cantidad,
        subtotal: detalleVenta.subtotal,
        estadoAuditoria: detalleVenta.estado_auditoria,
        fechaCreacion: detalleVenta.fecha_creacion ? new Date(detalleVenta.fecha_creacion) : null,
        fechaActualizacion: detalleVenta.fecha_actualizacion ? new Date(detalleVenta.fecha_actualizacion) : null
    };
}

export const toPrismaDetalleVenta = (detalleVenta: DetalleVenta)=> {
    return {
        id_venta: detalleVenta.idVenta,
        id_producto: detalleVenta.idProducto,
        cantidad: detalleVenta.cantidad,
        subtotal: detalleVenta.subtotal,
        fecha_actualizacion: detalleVenta.fechaActualizacion ? detalleVenta.fechaActualizacion.toISOString() : null
    };
}