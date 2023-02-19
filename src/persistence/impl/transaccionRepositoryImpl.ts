import { TransaccionRequestDto } from '../../controllers/dto/transaccionRequestDto';
import { SqlClient } from '../client/sqlClient';
import { TransaccionesRepository } from '../transaccionRepository';

export class TransaccionRepositoryImpl implements TransaccionesRepository {

    constructor (private readonly sqlClientTransaccion: SqlClient) {}
    
    public getTransaccion = async () => {
        return await this.sqlClientTransaccion.findAll();
    }

    public storeTransaccion = async (transaccion: TransaccionRequestDto) => {
        return await this.sqlClientTransaccion.storeEntity(transaccion);
    }
}