
import { TransaccionesRepository } from '../../persistence/transaccionRepository';
import { TransaccionRequestDto } from '../../controllers/dto/transaccionRequestDto';
import { TransaccionService } from "../transaccionService";
import { TransaccionValidation } from '../validations/transaccionValidation';
import { CuentaRepository } from '../../persistence/cuentaRepository';
import { ReportRepository } from '../../persistence/reportRepository';
import { ReportUtils } from '../../persistence/client/utils/reportUtil';
import { FixerApiServiceImpl } from './fixerApiServiceImpl';



export class TransaccionServiceImpl implements TransaccionService {

    constructor(private readonly transaccionesRepository: TransaccionesRepository,
            private readonly cuentaRepository: CuentaRepository,
            private readonly reportRepository: ReportRepository,
            public fixerApi:FixerApiServiceImpl
        ) { }

    public getTransaccion = async (body:object) => {
        
        const reportData = await this.reportRepository.getReport(body);
        
        const reportPorcentajes = ReportUtils.calcularPorcentajes(reportData);  
               
        return reportPorcentajes;
    }

    public storeTransaccion = async (transaccion: TransaccionRequestDto) => {

        const cuentaOrigen:any = await this.cuentaRepository.getCuentaById(transaccion.cuentaOrigen);
      
        const cuentaDestino:any = await this.cuentaRepository.getCuentaById(transaccion.cuentaDestino);
        
        if (
        TransaccionValidation.validateDescripcionLength(transaccion.descripcion) 
        
        &&

        TransaccionValidation.validateMontoCuentaOrigen(cuentaOrigen, transaccion.monto)
        
        ) 
            
        {

            const reportData = await this.reportRepository.getReport(transaccion);

            const cuantasPorUsuario =  ReportUtils.obtenerIdsCuentasPorUsuario(reportData);

            let flagComision = ReportUtils.isCuentaOrigenEnUsuariocuentas(cuantasPorUsuario,cuentaOrigen.id)

            const storedTransaccion = await this.transaccionesRepository.storeTransaccion(transaccion);
          
            const divisaOrigen = ReportUtils.buscarDivisaDeTransaccion(cuentaOrigen.divisa.nombreDivisa);
            
            const divisaDestino = ReportUtils.buscarDivisaDeTransaccion(cuentaDestino.divisa.nombreDivisa);
           
            const montoConversion = await this.fixerApi.convertirDivisa(divisaOrigen,divisaDestino,transaccion.monto)

            const montoDescuento = flagComision ? transaccion.monto * 0.01 : 0;
            
            cuentaOrigen.monto -= (transaccion.monto + montoDescuento);

            cuentaDestino.monto = cuentaDestino.monto + montoConversion;
             
            delete cuentaOrigen.transaccionDestino;
            delete cuentaOrigen.transaccionOrigen;
            delete cuentaDestino.transaccionDestino;
            delete cuentaDestino.transaccionOrigen;
            
            await this.cuentaRepository.updateCuenta(cuentaOrigen.id,cuentaOrigen);
            
            await this.cuentaRepository.updateCuenta(cuentaDestino.id,cuentaDestino);    
        
            return storedTransaccion;
        }
    }
}
   