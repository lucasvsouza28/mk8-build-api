import { Router } from 'express';

import BodiesRouter from './bodies-router';
import DriversRouter from './drivers-router';
import GlidersRouter from './gliders-router';
import TiresRouter from './tires-router';

const router = Router();

router.use('/bodies', BodiesRouter);
router.use('/drivers', DriversRouter);
router.use('/gliders', GlidersRouter);
router.use('/tires', TiresRouter);

export default router;