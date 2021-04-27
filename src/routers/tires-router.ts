import {
    Router
} from 'express';

import TiresController from '../controllers/tires-controller';

const tiresController = new TiresController();
const router = Router();

router.use('/', tiresController.getTires);

export default router