export interface Inventario {
    idProducto: number;
    stock: number;  
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}
