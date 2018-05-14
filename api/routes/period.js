import { Router } from 'express'
import { getAllPeriod, createPeriod } from '../controllers/period.controller'

const router = Router()

router.get('/', getAllPeriod)
router.post('/', createPeriod)

export default router
