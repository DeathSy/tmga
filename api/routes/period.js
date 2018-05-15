import { Router } from 'express'
import { getAllPeriod, createPeriod, getPeriod } from '../controllers/period.controller'

const router = Router()

router.get('/', getAllPeriod)
router.get('/:id', getPeriod)
router.post('/', createPeriod)

export default router
