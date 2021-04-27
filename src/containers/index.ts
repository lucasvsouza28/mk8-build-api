import { container } from 'tsyringe';
import GetBodiesService, { IGetBodiesService } from '../services/bodies/GetBodiesService';
import GetDriversService, { IGetDriversService } from '../services/drivers/GetDriversService';
import GetGlidersService, { IGetGlidersService } from '@services/gliders/GetGlidersService';
import GetTiresService, { IGetTiresService } from '@services/tires/GetTiresService';

container.register<IGetBodiesService>('GetBodiesService', GetBodiesService);

container.register<IGetDriversService>('GetDriversService', GetDriversService);

container.register<IGetGlidersService>('GetGlidersService', GetGlidersService);

container.register<IGetTiresService>('GetTiresService', GetTiresService);