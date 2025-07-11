import { Decimal } from "@prisma/client/runtime/library";

export interface Venta {
    idVenta: number;
    idCliente: number;
    total: Decimal;
    estadoAuditoria: string | null;
    fechacreacion: Date | null;
    fechaActualizacion: Date | null;
}