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
                .leftJoinAndSelect('cuenta.transaccionOrigen', 'transaccionOrigen')
                .leftJoinAndSelect('cuenta.transaccionDestino', 'transaccionDestino')
                .orderBy({ 'Usuario.nombreUsuario': 'ASC' })
            break;
        }

        return query;
    }
}