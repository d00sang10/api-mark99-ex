
import { Cliente } from "../models/cliente";
import { cliente } from "@prisma/client";

export const fromPrismaCliente = (cliente: cliente) => {
  return {
    idCliente: cliente.id_cliente,
    nombre: cliente.nombre,
    email: cliente.email,
    telefone: cliente.telefono,
    estadoAuditoria: cliente.estado_auditoria,
    fechaCreacion: cliente.fecha_creacion ? new Date(cliente.fecha_creacion) : null,
    fechaActualizacion: cliente.fecha_actualizacion ? new Date(cliente.fecha_actualizacion) : null
  };
}

export const toPrismaCliente = (cliente: Cliente) => {
  return {
    nombre: cliente.nombre,
    email: cliente.email,
    telefono: cliente.telefono,
    fecha_actualizacion: cliente.fechaActualizacion ? cliente.fechaActualizacion.toISOString() : null
  };
}