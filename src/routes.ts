import { Router } from 'express'

import { SimianController } from './controllers/simian'
import { StatsController } from './controllers/stats'

const router = Router();

const simianController = new SimianController()
const statsController = new StatsController()

// simian
router.post('/simian', simianController.create)

// stats
router.get('/stats', statsController.read)

export { router }
