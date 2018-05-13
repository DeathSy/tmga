import { Router } from 'express'
import { startGenerateSchedual, getTimetableGeneratingStatus } from '../controllers/genetic.controller'

const router = Router()

router.get('/', startGenerateSchedual)
router.get('/status', getTimetableGeneratingStatus)

export default router
