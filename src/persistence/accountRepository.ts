import { Cuenta } from "../domain/cuenta";

export interface AccountRepository {
    getAccountById(accountId:number) : Promise<Cuenta>;
    updateAccount(accountId:number, account:Cuenta) : Promise<boolean>;
}