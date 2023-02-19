import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, OneToMany, OneToOne, JoinTable } from "typeorm";
import { Cuenta } from "./cuenta";

@Entity(`${process.env.ARQ_DB_NAME}.usuario`)
export class Usuario {

    @PrimaryGeneratedColumn({ name: "ID" })
    public id!: number;

    @Column({ name: "nombre" })
    public nombreUsuario!: string;

    @ManyToMany(() => Cuenta, cuenta => cuenta.usuario)
    @JoinTable({ name: 'usuario_cuenta' ,
        joinColumns: [{name: 'usuarioId', referencedColumnName: 'id'}],
        inverseJoinColumns: [{name: 'cuentaId', referencedColumnName: 'id'}]})
        public cuentas!: Cuenta[];
    
    public porcentajes: any;

    constructor(name: string, cuentas: any,porcentajes?:any) {
        this.nombreUsuario = name;
        this.cuentas = cuentas;
        this.porcentajes=porcentajes
    }
}