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
      id_cliente: id,
      estado_auditoria: '1'

    }
  });

  if (!cliente || cliente.estado_auditoria !== '1') {
    return (RESPONSE_NOT_FOUND);
  }

  return cliente ? fromPrismaCliente(cliente) : null;
}


export const agregarClientes = async (cliente: Cliente) => {

  console.log("services/cliente.service.ts: agregarClientes");

  await prisma.cliente.create({
    data: toPrismaCliente(cliente)
  });

  return RESPONSE_INSERT_OK;
};

export const modificarCliente = async (id: number, cliente: Cliente) => {

  console.log("services/cliente.service.ts: modificarCliente");

  const dataActualizada = { ...cliente, fechaActualizacion: new Date() }

  /* Update del registro con el modelo Prisma */
  const updated = await prisma.cliente.updateMany({
    where: {
      /* Donde 'id_cliente' de la tabla sea igual al 'id' parametro */
      id_cliente: id,
      /* Donde su estado de auditoria se '1' */
      estado_auditoria: '1'
    },
    data: toPrismaCliente(dataActualizada)
  });

  /* Si la variable 'updated' que almacena el registro esta vacia 
     devulve un NOT FOUNT */
  if (updated.count === 0) {
    return RESPONSE_NOT_FOUND;
  }

  return RESPONSE_UPDATE_OK;
}

// export const modificarCliente = async (id: number, cliente: Cliente) => {
  
//   console.log("services/cliente.service.ts: modificarCliente");
  
//   const dataActualizada = { ...cliente, fechaActualizacion: new Date() }
  
//   const clienteExistente = await prisma.cliente.findUnique({
//     where: {
//       id_cliente: id
//     }
//   });

//   if (!clienteExistente || clienteExistente.estado_auditoria !== '1') {
//     return RESPONSE_NOT_FOUND;
//   }

//   await prisma.cliente.update({
//     where: {
//       id_cliente: id
//     },
//     data: toPrismaCliente(dataActualizada)
//   });

//   return RESPONSE_UPDATE_OK;
// }

export const eliminarCliente = async (id: number) => {

  console.log("services/cliente.service.ts: eliminarCliente");

  const cliente = await prisma.cliente.findUnique({
    where: {
      id_cliente: id,
      estado_auditoria: '1'
    }
  });

  if (!cliente) {
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

