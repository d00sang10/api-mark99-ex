
import { inventario, PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_NOT_FOUND_PRODUC, RESPONSE_UPDATE_OK } from "../shared/constants";
import { Inventario } from "../models/inventario";
import { fromPrismaInventario, toPrismaInventario } from "../mappers/Inventario.mapper";

const prisma = new PrismaClient();

export const listarInventarios = async () => {
    console.log("inventarioService:: listarInventarios");
    const inventarios: inventario[] = await prisma.inventario.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_producto: 'asc' 
        }
    });
    return inventarios.map((inventarios: inventario)=> fromPrismaInventario(inventarios));
}


export const buscarInventarioPorId = async(id: number) => {
    console.log("inventarioService:: buscarInventarioPorId");
    const inventario: inventario | null = await prisma.inventario.findUnique({
        where: {
            id_producto: id
        }
    });
    if (!inventario || inventario.estado_auditoria !== '1') {
        return (RESPONSE_NOT_FOUND);
    }
    return inventario? fromPrismaInventario(inventario):null;
}


export const agregarInventario = async (inventario: Inventario) => {

    console.log("inventarioService:: agregarInventario");

    const producto = await prisma.producto.findUnique({
        where: { 
            id_producto: inventario.idProducto 
        }
    });

    if (!producto || producto.estado_auditoria !=='1') {
        return RESPONSE_NOT_FOUND_PRODUC;
    }

    await prisma.inventario.create({
        data: toPrismaInventario(inventario)
    });
    
    return RESPONSE_INSERT_OK;
};


export const modificarInventario = async (id: number, inventario: Inventario) => {
    console.log("inventarioService:: modificarInventario");
    const dataActualizada = {...inventario,fechaActualizacion: new Date()}
    const inventarioExistente = await prisma.inventario.findUnique({
        where: {
            id_producto: id
        }
    });

    if (!inventarioExistente || inventarioExistente.estado_auditoria !== '1') {
         return RESPONSE_NOT_FOUND;
    }

    await prisma.inventario.update({
        where: {
            id_producto: id
        },
        data:toPrismaInventario(dataActualizada)
    });
    return RESPONSE_UPDATE_OK;
};