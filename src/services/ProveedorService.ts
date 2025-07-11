import { fromPrismaProveedor, toPrismaProveedor } from '../mappers/proveedor.mapper';
import { Proveedor } from '../models/proveedor';
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_UPDATE_OK } from '../shared/constants';
import { PrismaClient, proveedor } from "@prisma/client";

const prisma = new PrismaClient();

export const listarProveedores = async () => {
    console.log("proveedorService:: listarProveedores");
    const proveedores: proveedor[] = await prisma.proveedor.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_proveedor: 'asc'
        }
    });
    return proveedores.map((proveedores: proveedor) => fromPrismaProveedor(proveedores));
}


export const buscarProveedorPorId = async (id: number) => {
    console.log("proveedorService:: buscarProveedorPorId");
    const proveedor: proveedor | null = await prisma.proveedor.findUnique({
        where: {
            id_proveedor: id
        }
    });
    if (!proveedor || proveedor.estado_auditoria !== '1') {
        return (RESPONSE_NOT_FOUND);
    }
    return proveedor ? fromPrismaProveedor(proveedor) : null;
}


export const agregarProveedor = async (proveedor: Proveedor) => {
    
    console.log("proveedorService:: agregarProveedor");
    
    await prisma.proveedor.create({
        data: toPrismaProveedor(proveedor)
    });
    
    return RESPONSE_INSERT_OK;
}


export const modificarProveedor = async (id: number, proveedor: any) => {
    console.log("proveedorService:: modificarProveedor");
    const dataActualizada = { ...proveedor, fechaActualizacion: new Date() }
    const proveedorExistente = await prisma.proveedor.findUnique({
        where: {
            id_proveedor: id
        }
    });
    if (!proveedorExistente || proveedorExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }
    await prisma.proveedor.update({
        where: {
            id_proveedor: id
        },
        data: toPrismaProveedor(dataActualizada)
    });
    return RESPONSE_UPDATE_OK;
}


export const eliminarProveedor = async (id: number) => {
    console.log("proveedorService:: eliminarProveedor");
    const proveedorExistente = await prisma.proveedor.findUnique({
        where: {
            id_proveedor: id
        }
    });
    if (!proveedorExistente || proveedorExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }
    await prisma.proveedor.update({
        where: {
            id_proveedor: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_DELETE_OK;
}