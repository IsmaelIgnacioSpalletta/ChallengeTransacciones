
import { TransaccionesRepository } from '../../persistence/transaccionRepository';
import { TransaccionRequestDto } from '../../controllers/dto/transaccionRequestDto';
import { TransaccionService } from "../transaccionService";
import { TransaccionValidation } from '../validations/transaccionValidation';
import { AccountRepository } from '../../persistence/accountRepository';
import { ReportRepository } from '../../persistence/reportRepository';
import { ReportUtils } from '../../persistence/client/utils/reportUtil';


export class TransaccionServiceImpl implements TransaccionService {

    constructor(private readonly transaccionesRepository: TransaccionesRepository,

            private readonly accountRepository: AccountRepository,
            private readonly reportRepository: ReportRepository,
        ) { }

    public getTransaccion = async () => {
        
        const reportData = await this.reportRepository.getReport();

        const reportPorcentajes = ReportUtils.calculatePercentage(reportData);  
               
        return reportPorcentajes;
    }

    public storeTransaccion = async (transaccion: TransaccionRequestDto) => {

        const cuentaOrigen = await this.accountRepository.getAccountById(transaccion.cuentaOrigen);
      
        const cuentaDestino = await this.accountRepository.getAccountById(transaccion.cuentaDestino);
      
        if (
        TransaccionValidation.validateDescripcionLength(transaccion.descripcion) 
        
        &&

        TransaccionValidation.validateMontoCuentaOrigen(cuentaOrigen, transaccion.monto)
        
        ) 
            
        {
           
            const storedTransaccion = await this.transaccionesRepository.storeTransaccion(transaccion);
           
            cuentaOrigen.monto = cuentaOrigen.monto - transaccion.monto;

            cuentaDestino.monto = cuentaDestino.monto + transaccion.monto;
             
            delete cuentaOrigen.transaccionDestino;
            delete cuentaOrigen.transaccionOrigen;
            delete cuentaDestino.transaccionDestino;
            delete cuentaDestino.transaccionOrigen;

            await this.accountRepository.updateAccount(cuentaOrigen.id,cuentaOrigen);
            
           
            await this.accountRepository.updateAccount(cuentaDestino.id,cuentaDestino);    
            
            
            return storedTransaccion;
        }
    }
}