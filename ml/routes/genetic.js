import { Router } from 'express'
import {
  startGenerateSchedual,
  getTimetableGeneratingStatus,
  terminateGenerating
} from '../controllers/genetic.controller'

const router = Router()

router.get('/', startGenerateSchedual)
router.get('/status', getTimetableGeneratingStatus)
router.get('/terminate', terminateGenerating)

export default router
