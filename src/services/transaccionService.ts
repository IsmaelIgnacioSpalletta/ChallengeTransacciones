import { TransaccionRequestDto } from '../controllers/dto/transaccionRequestDto';


export interface TransaccionService {
    getTransaccion() : any;
    storeTransaccion(transaccion: TransaccionRequestDto) : any;
}