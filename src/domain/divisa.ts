import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, OneToMany } from "typeorm";

@Entity(`${process.env.ARQ_DB_NAME}.divisa`)
export class Divisa {

    @PrimaryGeneratedColumn({ name: "ID" })
    public id!: number;

    @Column({ name: "nombre" })
    public nombreDivisa!: string;

    constructor(nombreDivisa: string) {
        this.nombreDivisa = nombreDivisa;
    }
}