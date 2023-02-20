
export class ReportUtils {


    constructor() { }

    public static calcularPorcentajes = (userAccount: any) => {
        
        let cuentasPorUsuario: any = [];

        cuentasPorUsuario = ReportUtils.obtenerIdsCuentasPorUsuario(userAccount);

        let result: any = {}
        userAccount.forEach((user: any) => {
            const { interna, externa } = ReportUtils.calcularValoresEn(user, cuentasPorUsuario)

            result[user.id] = {
                interna,
                externa,
                usuario: user.nombreUsuario,
            }
        });

        result = Object.values(result).sort((a: any, b: any) => a.usuario.localeCompare(b.usuario));
        return result;
    }

    public static calcularValoresEn = (user: any, cuentasPorUsuario: any) => {

        let interna = 0
        let externa = 0
        let cuentasQueRecibieron: any = [];
        let cuentasQueMandaron: any = [];
        const cuentasUsuario = cuentasPorUsuario[user.id];

        user.cuentas.forEach((cuenta: any) => {
            
            cuenta.transaccionOrigen.forEach((transaccion: any) => {
                const cuentaDestinoId = transaccion.cuentaDestino?.id;
                cuentasQueRecibieron.push(cuentaDestinoId);
            });

            cuenta.transaccionDestino.forEach((transaccion: any) => {
                const cuentaOrigenId = transaccion.cuentaOrigen?.id;
                cuentasQueMandaron.push(cuentaOrigenId);
            });


        })
        
        
        for (const cuentaMandaron of cuentasQueMandaron) {
            if (cuentasUsuario.includes(cuentaMandaron)) {
                interna++;
            } else {
                externa++;
            }
        }
        for (const cuentaRecibieron of cuentasQueRecibieron) {
            if (!cuentasUsuario.includes(cuentaRecibieron)) {
                externa++;
            }
        }

        const total = Math.max(interna + externa, 1)
        interna = interna / total * 100
        externa = externa / total * 100

        return {
            interna,
            externa,
        }
    }

    public static obtenerIdsCuentasPorUsuario(usuarios: any) {
        const idsCuentasPorUsuario: any = {};

        for (const usuario of usuarios) {
            idsCuentasPorUsuario[usuario.id] = usuario.cuentas.map((cuenta: any) => cuenta.id);
        }

        return idsCuentasPorUsuario;
    }


    public static buscarDivisaDeTransaccion = (nombreDivisa: keyof typeof buscarDivisa): string => {
        return nombreDivisa in buscarDivisa ? buscarDivisa[nombreDivisa] : nombreDivisa;
    };


    public static isCuentaOrigenEnUsuariocuentas(userAccounts:any, cuentaOrigenId: number): boolean {
        const userKeys = Object.keys(userAccounts);
      
        for (let i = 0; i < userKeys.length; i++) {
          const userAccountIds = userAccounts[userKeys[i]];
          if (userAccountIds.includes(cuentaOrigenId)) {
            return true;
          }
        }
      
        return false;
    }


}

export enum buscarDivisa {
    'Pesos Uruguayos' = 'URU',
    'Pesos Argentinos'='ARS',
    'Dólares Americanos'='USD',
    'Euros'='EUR'
}