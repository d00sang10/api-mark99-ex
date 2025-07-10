
export interface Cliente {
    idCliente: number;

    nombre: string;
    email: string | null;
    telefono: string | null;
    
    estadoAuditoria: string | null;
    fechaCreacion: Date | null;
    fechaActualizacion: Date | null;
}

