import { PrismaClient, venta } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_NOT_FOUND_CLIE, RESPONSE_UPDATE_OK } from "../shared/constants";
import { Venta } from "../models/venta";
import { fromPrismaVenta, toPrismaVenta } from "../mappers/venta.mapper";


const prisma = new PrismaClient();

export const listarVentas = async () => {
    console.log("ventaService:: listarVentas");
    const ventas: venta[] = await prisma.venta.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_venta: 'asc'
        }
    });
    return ventas.map((ventas: venta) => fromPrismaVenta(ventas));
}

export const buscarVentaPorId = async (id: number) => {
    console.log("ventaService:: buscarVentaPorId");
    const ventas: venta | null = await prisma.venta.findUnique({
        where: {
            id_venta: id
        }
    });
    if (!ventas|| ventas.estado_auditoria!=='1') {
        return (RESPONSE_NOT_FOUND);
    }
    return ventas ? fromPrismaVenta(ventas) : null;
};

export const listarVentasPorCliente = async (id_cliente: number) => {
    console.log("ventaService:: listarVentasPorCliente");
    const ventas: venta[] = await prisma.venta.findMany({
        where: {
            id_cliente: id_cliente,
            estado_auditoria: '1'
        },
        orderBy: {
            fecha_creacion: 'desc'
        }
    });
    if (ventas.length === 0) {
        return (RESPONSE_NOT_FOUND);
    }
    return ventas.map((ventas: venta) => fromPrismaVenta(ventas));

};

export const agregarVenta = async (venta: Venta) => {
    console.log("ventaService:: agregarVenta");
    const clienteExistente = await prisma.cliente.findUnique({
        where: {
            id_cliente: venta.idCliente
        }
    });
    if (!clienteExistente|| clienteExistente.estado_auditoria!=='1') {
        return RESPONSE_NOT_FOUND_CLIE;
    }
    const nuevaVenta = await prisma.venta.create({
        data: toPrismaVenta({
            ...venta,
            idCliente: venta.idCliente,
            total: venta.total ?? 0
        })
    });
    return RESPONSE_INSERT_OK;
};

export const modificarVenta = async (id: number, venta: Venta) => {
    console.log("ventaService:: modificarVenta");
    const dataActualizada = { ...venta, fechaActualizacion: new Date() }
    const ventaExistente = await prisma.venta.findUnique({
        where: {
            id_venta: id
        }
    });
    if (!ventaExistente || ventaExistente.estado_auditoria !=='1') {
        return RESPONSE_NOT_FOUND;
    }
    const clienteExistente = await prisma.cliente.findUnique({
        where:{
            id_cliente: venta.idCliente
        }
    });
    if(!clienteExistente || clienteExistente.estado_auditoria !=='1'){
        return RESPONSE_NOT_FOUND_CLIE;
    }

    await prisma.venta.update({
        where: {
            id_venta: id
        },
        data: toPrismaVenta(dataActualizada)
    });
    return RESPONSE_UPDATE_OK;
};

export const eliminarVenta = async (id: number) => {
    console.log("ventaService:: eliminarVenta");
    const ventaExistente = await prisma.venta.findUnique({
        where: {
            id_venta: id
        }
    });
    if (!ventaExistente || ventaExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }
    await prisma.venta.update({
        where: {
            id_venta: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_DELETE_OK;
};


