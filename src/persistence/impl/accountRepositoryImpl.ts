import { Cuenta } from '../../domain/cuenta';
import { AccountRepository } from '../accountRepository';
import { SqlClient } from '../client/sqlClient';




export class AccountRepositoryImpl implements AccountRepository {

    constructor (private readonly sqlClientAccount: SqlClient) {}
   
   
    public getAccountById = async (accountId: number) => {
        let cuentaOrigen = await this.sqlClientAccount.findById(accountId);
        return cuentaOrigen
    }

    public updateAccount = async (accountId: number , account:Cuenta) => {

       return await this.sqlClientAccount.updateEntity(accountId, account);
    }


}


