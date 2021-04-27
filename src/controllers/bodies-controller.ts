import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IGetBodiesService } from '../services/bodies/GetBodiesService';
import { injectable } from "tsyringe";

@injectable()
export default class BodiesController {
    constructor(){}

    async getBodies(_: Request, res: Response){
        const service = container.resolve<IGetBodiesService>('GetBodiesService');
        const data = await service.execute();

        return res.json(data);
    }
}