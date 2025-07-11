export interface Cliente {
    idCliente: number;
    nombre: string;
    email: string | undefined;
    telefono: string | null;
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}

