import { Cuenta } from "../domain/cuenta";

export interface CuentaRepository {
    getCuentaById(accountId:number) : Promise<Cuenta>;
    updateCuenta(accountId:number, account:Cuenta) : Promise<boolean>;
}