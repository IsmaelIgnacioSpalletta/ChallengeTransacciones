import { DELETE, GET, POST, PUT, route } from "awilix-express";
import { Response, Request } from "express";
import { NotFoundEntityError } from "../errors/notFoundEntityError";
import { ValidationError } from "../errors/validationError";
import { BaseController } from "./baseController";
import { TransaccionResponseDto } from './dto/transaccionResponseDto';
import { TransaccionService } from '../services/transaccionService';
import { TransaccionRequestDto } from './dto/transaccionRequestDto';
import { Repository } from '../connection/connection';


export class TransaccionController extends BaseController {

    private statusInternalServerError = '500';
    private badRequestError = '400';
    private notFoundError = '404';


    constructor (private readonly transaccionService: TransaccionService) {
        super();
    }
    @route('/report')
    @GET()
    public getTransacciones = async (req: Request, res: Response) => {
        try {
            const report = await this.transaccionService.getTransaccion();
            this.sendSuccess(res, report);
        } catch (e: any) {
            console.log(e);
            this.sendInternalError(res, e.message, this.statusInternalServerError);
        }
    }
    @route('/transfer')
    @POST()
    public storeTransaccion = async (req: Request, res: Response) => {
        try {
            const response = await this.transaccionService.storeTransaccion(TransaccionRequestDto.toTransaccion(req.body));
            this.sendSuccess(res, TransaccionResponseDto.TransaccionDto(response));
        } catch (e: any) {
            if (e instanceof ValidationError) {
                this.sendBadReq(res, e.message, this.badRequestError);
            } else {
                this.sendInternalError(res, e.message, this.statusInternalServerError);
            }
        }
    }
}