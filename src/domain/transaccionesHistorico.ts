import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { Cuenta } from './cuenta';

@Entity(`${process.env.ARQ_DB_NAME}.transaccion_historico`)
export class TransaccionesHistorico {

    @PrimaryGeneratedColumn({ name: "ID" })
    public id!: number;

    @Column({name: "fecha"})
    public fecha!: Date;

    @Column({ name: "descripcion" })
    public descripcion!: string;

    @Column({ name: "monto" })
    public monto!: number;

    @ManyToOne(() => Cuenta, cuenta => cuenta.id )
    public cuentaDestino?: Cuenta[];

    @ManyToOne(() => Cuenta, cuenta => cuenta.id )
    public cuentaOrigen?: Cuenta[];



    constructor (monto:number , fecha:Date ,descripcion:string , cuentaDestino:any , cuentaOrigen:any) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.cuentaDestino = cuentaDestino;
        this.fecha = fecha;
        this.monto = monto;
        this.cuentaOrigen = cuentaOrigen;
    }
}