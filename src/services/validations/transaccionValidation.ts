import { ValidationError } from "../../errors/validationError";


export class TransaccionValidation {
    

    public static validateDescripcionLength = (descripcion: string) => {
        if (descripcion.toString().length > 100) {
            throw new ValidationError('La descripcion supera los 100 caracteres');
        } else {
            return true;
        }
    }

    public static validateMontoCuentaOrigen = (originAccount:any,monto: number) => {

        let originAccountMount = parseInt(originAccount.monto);
        
        if (originAccountMount < monto) {
            throw new ValidationError('La cuenta de origen no tiene suficiente saldo para transferir');
        } else {
            return true;
        }
    }

}