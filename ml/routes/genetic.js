import { Router } from 'express'
import { startGenerateSchedual } from '../controllers/genetic.controller'

const router = Router()

router.get('/', startGenerateSchedual)

export default router
