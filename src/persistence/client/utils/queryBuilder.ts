

export class QueryBuilder {
    transaccion: any;
   

    constructor() {}

    public static buildQuery = (entity: string, query: any, parameters?: any) => {

        switch (entity) {
            case 'Cuenta': 
                query = query.leftJoinAndSelect('Cuenta.divisa', 'divisa')
                if (parameters?.id) query = query.where('Cuenta.id = :id', {id: parameters.id});
            break;


            case 'Usuario': 
            query = query
                .leftJoinAndSelect('Usuario.cuentas', 'cuenta')
                .leftJoinAndSelect('cuenta.divisa', 'divisa')
                .leftJoinAndSelect('cuenta.transaccionOrigen', 'transaccionOrigen')
                .leftJoinAndSelect('transaccionOrigen.cuentaDestino', 'cuentaDestino')
                .leftJoinAndSelect('cuenta.transaccionDestino', 'transaccionDestino')
                .leftJoinAndSelect('transaccionDestino.cuentaOrigen', 'cuentaOrigen')
                .orderBy({ 'Usuario.nombreUsuario': 'ASC' })
               
                if (parameters?.from) {
                    query = query.andWhere("transaccionOrigen.fecha >= STR_TO_DATE(:from, '%Y-%m-%d')", { from: parameters.from })
                    
                }
                if (parameters?.to) {
                    query = query.andWhere("transaccionOrigen.fecha <= STR_TO_DATE(:to, '%Y-%m-%d')", { to: parameters.to })
                    
                }
            break;
        }

        return query;
    }
}