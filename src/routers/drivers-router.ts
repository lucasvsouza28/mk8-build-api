import {
    Router
} from 'express';

import DriversController from '../controllers/drivers-controller';

const driversController = new DriversController();
const router = Router();

router.use('/', driversController.getDrivers);

export default router