import { createContainer, asClass, asFunction } from 'awilix';
import express = require('express');
import { scopePerRequest } from 'awilix-express'
import { SqlClientWrapper } from '../persistence/client/impl/sqlClientWrapper';
import { TransaccionRepositoryImpl } from '../persistence/impl/transaccionRepositoryImpl';
import { TransaccionServiceImpl } from '../services/impl/transaccionServiceImpl';
import { CuentaRepositoryImpl } from '../persistence/impl/cuentaRepositoryImpl';
import { ReportRepositoryImpl } from '../persistence/impl/reportRepositoryImpl';
import { FixerApiServiceImpl } from '../services/impl/fixerApiServiceImpl';




export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({

        // services
        transaccionService: asClass(TransaccionServiceImpl).scoped(),
        fixerApi: asClass(FixerApiServiceImpl).scoped(),
        // reportUtils: asClass(ReportUtils).singleton(),
        // repositories
        transaccionesRepository: asClass(TransaccionRepositoryImpl).scoped(),
        cuentaRepository: asClass(CuentaRepositoryImpl).scoped(),
        reportRepository: asClass(ReportRepositoryImpl).scoped(),
        // clients
        sqlClientCuenta: asFunction(() => getSqlClientInstance('Cuenta')).scoped(),
        sqlClientDivisa: asFunction(() => getSqlClientInstance('Divisa')).scoped(), 
        sqlClientTransaccion: asFunction(() => getSqlClientInstance('TransaccionesHistorico')).scoped(),
        sqlClientUser: asFunction(() => getSqlClientInstance('Usuario')).scoped(),
        //utils
       
    });

    app.use(scopePerRequest(container));
}

let getSqlClientInstance = (entity: string) => {
    return new SqlClientWrapper(entity);
}