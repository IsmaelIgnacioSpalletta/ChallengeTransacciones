export class TransaccionResponseDto {
    
    public monto: number;
    public fecha: Date;
    public descripcion: string;
    public cuentaDestino: number;
    public cuentaOrigen: number;

    constructor(monto: number, fecha: Date, descripcion: string, cuentaDestino: any, cuentaOrigen: any) {
        this.monto = monto;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.cuentaDestino = cuentaDestino;
        this.cuentaOrigen = cuentaOrigen;
    }

    public static TransaccionDto = (transaccion: TransaccionResponseDto) => new TransaccionResponseDto(transaccion.monto,transaccion.fecha,transaccion.descripcion,transaccion.cuentaDestino,transaccion.cuentaOrigen);

    public static transaccionArrayToDto = (transacciones: Array<TransaccionResponseDto>) => transacciones.map(transaccion => this.TransaccionDto(transaccion));
    
}


