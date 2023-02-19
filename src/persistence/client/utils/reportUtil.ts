
export class ReportUtils {


    constructor() { }

    public static calculatePercentage = (userAccount: any) => {
        const result:any = {}
        userAccount.forEach((user:any) => {
            const { origen, destino } = ReportUtils.calcularValoresEn(user.cuentas)

            result[user.id] = {
                origen,
                destino,
                usuario: user.nombreUsuario, 
            }
        });

        //result = Object.values(result).sort((a:any, b:any) => a.usuario.localeCompare(b.usuario));
        return result;
    }

    public static calcularValoresEn = (cuentas:any) => {
        let origen = 0
        let destino = 0
        cuentas.forEach((cuenta:any) => {
            console.log(cuenta);
            origen += cuenta.transaccionOrigen.length;
            destino += cuenta.transaccionDestino.length;
        })
       
        const total = Math.max(origen + destino, 1)
        origen = origen / total * 100
        destino = destino / total * 100
        
        return {
            origen,
            destino,
        }
    }
}