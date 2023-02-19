import { Usuario } from '../domain/usuario';


export interface ReportRepository {
    getReport() : Promise<Usuario[]>;
}