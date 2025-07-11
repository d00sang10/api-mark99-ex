import { detalle_venta, PrismaClient } from "@prisma/client";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_NOT_FOUND, RESPONSE_UPDATE_OK } from "../shared/constants";
import { DetalleVenta } from "../models/detalleVenta";
import { Decimal } from "@prisma/client/runtime/library";
import { fromPrismaDetalleVenta, toPrismaDetalleVenta } from "../mappers/detalleVenta.mapper";

const prisma = new PrismaClient();

export const listarDetalles = async () => {
    console.log("detalleVentaService:: listarDetalles");
    const detalles: detalle_venta[] = await prisma.detalle_venta.findMany({
        where: {
            estado_auditoria: '1'
        },
        orderBy: {
            id_detalle: 'asc'
        }
    });
    return detalles.map((detalles: detalle_venta) => fromPrismaDetalleVenta(detalles));
}

export const buscarDetallePorId = async (id: number) => {
    console.log("detalleVentaService:: buscarDetallePorId");
    const detalle: detalle_venta | null = await prisma.detalle_venta.findUnique({
        where: {
            id_detalle: id,
        }
    });
    if (!detalle || detalle.estado_auditoria !== '1') {
        return (RESPONSE_NOT_FOUND);
    }
    return detalle ? fromPrismaDetalleVenta(detalle) : null;
}


export const agregarDetalle = async (detalle: DetalleVenta) => {
    console.log("detalleVentaService:: agregarDetalle");

    const venta = await prisma.venta.findUnique({
        where: { id_venta: detalle.idVenta }
    });

    if (!venta || venta.estado_auditoria !== '1') {
        return ("La venta no existe o está inactiva");
    }

    // Validar que el producto exista y esté activo
    const producto = await prisma.producto.findUnique({
        where: { id_producto: detalle.idProducto }
    });

    if (!producto || producto.estado_auditoria !== '1') {
        return ("El producto no existe o está inactivo");
    }

    // Validar que el stock sea suficiente
    const inventario = await prisma.inventario.findUnique({
        where: { id_producto: detalle.idProducto }
    });
    if (!inventario || inventario.stock < detalle.cantidad) {
        return ("Stock insuficiente para el producto");
    }

    // Actualizar el stock del inventario
    await prisma.inventario.update({
        where: { id_producto: detalle.idProducto },
        data: {
            stock: inventario.stock - detalle.cantidad,
            fecha_actualizacion: new Date()
        }
    });
    // subtotal con el precio del producto
    detalle.subtotal = new Decimal(detalle.cantidad).mul(producto.precio);

    // ACTULIZAR EL TOTAL DE LA VENTA SUMANDO LOS SUBTOTALES DE ID_VENTA
    await prisma.venta.update({
        where: { id_venta: detalle.idVenta },
        data: {
            total: {
                increment: new Decimal(detalle.subtotal)
            },
            fecha_actualizacion: new Date()
        }
    });

    // Crear detalle de venta
    await prisma.detalle_venta.create({
        data: toPrismaDetalleVenta(detalle)
    });
    return RESPONSE_INSERT_OK;
};

export const eliminarDetalle = async (id: number) => {
    console.log("detalleVentaService:: eliminarDetalle");
    const detalleExistente = await prisma.detalle_venta.findUnique({
        where: {
            id_detalle: id
        }
    });
    if (!detalleExistente || detalleExistente.estado_auditoria !== '1') {
        return RESPONSE_NOT_FOUND;
    }

    await prisma.detalle_venta.update({
        where: {
            id_detalle: id
        },
        data: {
            estado_auditoria: '0',
            fecha_actualizacion: new Date()
        }
    });
    return RESPONSE_DELETE_OK;
}