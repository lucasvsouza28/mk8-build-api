import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IGetDriversService } from '../services/drivers/GetDriversService';
import { injectable } from "tsyringe";

@injectable()
export default class BodiesController {
    constructor(){}

    async getDrivers(_: Request, res: Response){
        const service = container.resolve<IGetDriversService>('GetDriversService');
        const data = await service.execute();

        return res.json(data);
    }
}