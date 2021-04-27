import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IGetGlidersService } from '../services/gliders/GetGlidersService';
import { injectable } from "tsyringe";

@injectable()
export default class GlidersController {

    async getGliders(_: Request, res: Response){
        const service = container.resolve<IGetGlidersService>('GetGlidersService');
        const data = await service.execute();

        return res.json(data);
    }
}