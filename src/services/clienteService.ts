import { cliente } from './../../node_modules/.prisma/client/index.d';
import { PrismaClient } from "@prisma/client";
import { Cliente } from "../models/cliente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_UPDATE_OK } from '../shared/constants';
import { fromPrismaCliente, toPrismaCliente } from '../mappers/cliente.mapper';


const prisma = new PrismaClient();

export const listarClientes = async () => {

  console.log("cliente.service.ts: listarClientes");

  const clientes: cliente[] = await prisma.cliente.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_cliente: 'asc'
    }
  });

  return clientes.map((clientes: cliente) => fromPrismaCliente(clientes));

}


export const buscarClientePorId = async (id: number) => {
  console.log("services/cliente.service.ts: buscarClientePorId");
  const cliente: cliente | null = await prisma.cliente.findUnique({

    where: {
      id_cliente: id
    }
  });
  if (!cliente || cliente.estado_auditoria !== '1') {
    return (RESPONSE_NOT_FOUND);
  }
  return cliente ? fromPrismaCliente(cliente) : null;
}


export const agregarClientes = async (cliente: Cliente) => {

  console.log("services/cliente.service.ts: agregarClientes");

  const clienteExistente = await prisma.cliente.findUnique({
    where: { email: cliente.email }
  });

  if (clienteExistente) {
    throw new Error('El email ya está registrado');
  }

  await prisma.cliente.create({
    data: toPrismaCliente(cliente)
  });

  return RESPONSE_INSERT_OK;
};

export const modificarCliente = async (id: number, cliente: Cliente) => {

  console.log("services/cliente.service.ts: modificarCliente");

  const dataActualizada = { ...cliente, fechaActualizacion: new Date() }
  const clienteExistente = await prisma.cliente.findUnique({
    where: {
      id_cliente: id
    }
  });

  if (!clienteExistente || clienteExistente.estado_auditoria !== '1') {
    return RESPONSE_NOT_FOUND;
  }

  await prisma.cliente.update({
    where: {
      id_cliente: id
    },
    data: toPrismaCliente(dataActualizada)
  });

  return RESPONSE_UPDATE_OK;
}


export const eliminarCliente = async (id: number) => {
  console.log("services/cliente.service.ts: eliminarCliente");
  const cliente = await prisma.cliente.findUnique({
    where: {
      id_cliente: id
    }
  });
  if (!cliente || cliente.estado_auditoria !== '1') {
    return (RESPONSE_NOT_FOUND);
  }

  await prisma.cliente.update({
    where: {
      id_cliente: id
    },
    data: {
      estado_auditoria: '0',
      fecha_actualizacion: new Date()
    }
  });

  return RESPONSE_DELETE_OK;
};


