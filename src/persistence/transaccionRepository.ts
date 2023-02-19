
import { TransaccionRequestDto } from '../controllers/dto/transaccionRequestDto';
import { TransaccionesHistorico } from '../domain/transaccionesHistorico';

export interface TransaccionesRepository {
    getTransaccion() : Promise<TransaccionesHistorico[]>;
    storeTransaccion(transaccion: TransaccionRequestDto) : Promise<TransaccionesHistorico>;
}