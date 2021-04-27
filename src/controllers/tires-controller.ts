import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IGetTiresService } from '../services/tires/GetTiresService';
import { injectable } from "tsyringe";

@injectable()
export default class TiresController {

    async getTires(_: Request, res: Response){
        const service = container.resolve<IGetTiresService>('GetTiresService');
        const data = await service.execute();

        return res.json(data);
    }
}