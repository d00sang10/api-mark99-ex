import { Decimal } from "@prisma/client/runtime/library";

export interface Producto {
    idProducto: number; 
    nombre: string;
    descripcion: string | null;
    precio: Decimal;
    idProveedor: number;
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}