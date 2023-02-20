import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { Divisa } from './divisa';
import { Usuario } from './usuario';
import { TransaccionesHistorico } from './transaccionesHistorico';

@Entity(`${process.env.ARQ_DB_NAME}.cuenta`)
export class Cuenta {

    @PrimaryGeneratedColumn({ name: "ID" })
    public id!: number;

    @Column({ name: "capital" })
    public monto!: number;
    
    @ManyToOne(() => Divisa, divisa => divisa.id)
    public divisa!: Divisa[];

    @OneToMany(() => TransaccionesHistorico, transaccion => transaccion.cuentaOrigen)
    @JoinColumn({name: 'cuentaOrigenId', referencedColumnName: 'id'})
    public transaccionOrigen?: TransaccionesHistorico[];

    @OneToMany(() => TransaccionesHistorico, transaccion => transaccion.cuentaDestino)
    @JoinColumn({name: 'cuentaDestinoId', referencedColumnName: 'id'})
    public transaccionDestino?: TransaccionesHistorico[];

    @ManyToMany(() => Usuario, usuario => usuario.cuentas)
    @JoinTable({ name: 'usuario_cuenta' ,
        joinColumns: [{name: 'usuarioId', referencedColumnName: 'id'}],
        inverseJoinColumns: [{name: 'cuentaId', referencedColumnName: 'id'}]})
        public usuario!: Usuario[];

    constructor(monto: number, divisa: any, transaccionDestino:any , transaccionOrigen:any) {
        this.monto = monto;
        this.divisa = divisa;
        this.transaccionOrigen = transaccionOrigen;
        this.transaccionDestino = transaccionDestino;
    }
}