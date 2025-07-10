import { proveedor } from "@prisma/client";
import { Proveedor } from "../models/proveedor";
export const fromPrismaProveedor = (proveedor: proveedor) => {
  return {
    idProveedor: proveedor.id_proveedor,
    nombre: proveedor.nombre,
    contacto: proveedor.contacto,
    email: proveedor.email,
    telefone: proveedor.telefono,
    estadoAuditoria: proveedor.estado_auditoria,
    fechaCreacion: proveedor.fecha_creacion ? new Date(proveedor.fecha_creacion) : null,
    fechaActualizacion: proveedor.fecha_actualizacion ? new Date(proveedor.fecha_actualizacion) : null
  };
}

export const toPrismaProveedor = (proveedor: Proveedor) => {
  return {
    nombre: proveedor.nombre,
    contacto: proveedor.contacto,
    email: proveedor.email,
    telefono: proveedor.telefono,
    fecha_actualizacion: proveedor.fechaActualizacion ? proveedor.fechaActualizacion.toISOString() : null
  };
}