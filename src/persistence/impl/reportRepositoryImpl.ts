import { SqlClient } from "../client/sqlClient";
import { ReportRepository } from '../reportRepository';


export class ReportRepositoryImpl implements ReportRepository {

    constructor (private readonly sqlClientUser: SqlClient) {}
    
    public getReport = async (body:object) => {
        
        return await this.sqlClientUser.findAll(body);
    }

}