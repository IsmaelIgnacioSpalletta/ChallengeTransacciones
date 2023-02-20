import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Cuenta} from "../domain/cuenta";
import { Divisa } from '../domain/divisa';
import { TransaccionesHistorico } from '../domain/transaccionesHistorico';
import { Usuario } from '../domain/usuario';





export class Repository {
    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if (!Repository.connection) {
            let options: any = {
                type: process.env.ARQ_DB_TYPE ='mysql',
                host: process.env.ARQ_DB_HOST,
                port: process.env.ARQ_DB_PORT,
                username: process.env.ARQ_DB_USER,
                password: process.env.ARQ_DB_PASSWORD,
                database: process.env.ARQ_DB_NAME,
                secretKey: process.env.SECRET_KEY,
                entities: [Cuenta,Divisa,TransaccionesHistorico,Usuario],
                synchronize: false,
                logging: true,
            }
            Repository.connection = await createConnection(options);
        }
        return Repository.connection;
    }

    public static getRepository = async (model: any) => {
        const conexion = await Repository.getInstace();
        return conexion.getRepository(model);
    }
}