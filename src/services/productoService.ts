
import { PrismaClient, producto } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_NOT_FOUND_PROVEE, RESPONSE_UPDATE_OK } from "../shared/constants";
import { Producto } from "../models/producto";
import { fromPrismaProducto, toPrismaProducto } from "../mappers/producto.mapper";
const prisma = new PrismaClient();

export const listarProductos = async () => {
    console.log("productoService:: listarProductos");
    const productos: producto[] = await prisma.producto.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_producto: 'asc'
        }
    });
    return productos.map((productos: producto) => fromPrismaProducto(productos));
}

export const buscarProductoPorId = async (id: number) => {
    console.log("productoService:: buscarProductoPorId");
    const producto: producto | null = await prisma.producto.findUnique({
        where: {
            id_producto: id
        }
    });

    if (!producto || producto.estado_auditoria !== '1') {
        return (RESPONSE_NOT_FOUND);
    }
    return producto ? fromPrismaProducto(producto) : null;
}


export const agregarProducto = async (producto: Producto) => {
    console.log("productoService:: agregarProducto");
    const proveedorExistente = await prisma.proveedor.findUnique({
        where: {
            id_proveedor: producto.idProveedor
        }
    });
    if (!proveedorExistente || proveedorExistente.estado_auditoria !=='1') {
        return RESPONSE_NOT_FOUND_PROVEE;
    }
    await prisma.producto.create({
        data: toPrismaProducto(producto)
    });
    return RESPONSE_INSERT_OK;
}



export const modificarProducto = async (id: number, producto: Producto) => {
    console.log("productoService:: modificarProducto");
    const dataActualizada = { ...producto, fechaActualizacion: new Date() }
    const productoExistente = await prisma.producto.findUnique({
        where: {
            id_producto: id
        }
    });

    if (!productoExistente || productoExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }

    await prisma.producto.update({
        where: {
            id_producto: id
        },
        data: toPrismaProducto(dataActualizada)
    });
    return RESPONSE_UPDATE_OK;
}


export const eliminarProducto = async (id: number) => {
    console.log("productoService:: eliminarProducto");
    const productoExistente = await prisma.producto.findUnique({
        where: {
            id_producto: id
        }
    });

    if (!productoExistente || productoExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }

    await prisma.producto.update({
        where: {
            id_producto: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_DELETE_OK;
}
