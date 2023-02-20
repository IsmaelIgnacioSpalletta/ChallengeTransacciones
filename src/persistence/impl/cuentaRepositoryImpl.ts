import { Cuenta } from '../../domain/cuenta';
import { CuentaRepository } from '../cuentaRepository';
import { SqlClient } from '../client/sqlClient';




export class CuentaRepositoryImpl implements CuentaRepository {

    constructor (private readonly sqlClientCuenta: SqlClient) {}
   
   
    public getCuentaById = async (accountId: number) => {
        let cuentaOrigen = await this.sqlClientCuenta.findById(accountId);
        return cuentaOrigen
    }

    public updateCuenta = async (accountId: number , account:Cuenta) => {

       return await this.sqlClientCuenta.updateEntity(accountId, account);
    }


}


