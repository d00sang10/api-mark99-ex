import { Decimal } from "@prisma/client/runtime/library";

export interface DetalleVenta {
    idDetalle: number; 
    idVenta: number;
    idProducto: number;
    cantidad: number;
    subtotal: Decimal;
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}