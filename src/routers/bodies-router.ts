import {
    Router
} from 'express';

import BodiesController from '../controllers/bodies-controller';

const bodiesController = new BodiesController();
const router = Router();

router.use('/', bodiesController.getBodies);

export default router