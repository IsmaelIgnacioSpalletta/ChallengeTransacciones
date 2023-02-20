import { TransaccionRequestDto } from '../controllers/dto/transaccionRequestDto';


export interface TransaccionService {
    getTransaccion(body:object) : any;
    storeTransaccion(transaccion: TransaccionRequestDto) : any;
}