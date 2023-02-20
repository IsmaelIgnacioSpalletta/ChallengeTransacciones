import { Usuario } from '../domain/usuario';


export interface ReportRepository {
    getReport(body:object) : Promise<Usuario[]>;
}