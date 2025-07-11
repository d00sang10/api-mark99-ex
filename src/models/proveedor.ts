export interface Proveedor {
    idProveedor: number;
    nombre: string;
    contacto: string | null;
    email: string | null;
    telefono: string | null; 
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}