import {
    Router
} from 'express';

import GlidersController from '../controllers/gliders-controller';

const glidersController = new GlidersController();
const router = Router();

router.use('/', glidersController.getGliders);

export default router;