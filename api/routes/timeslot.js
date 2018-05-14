import { Router } from 'express'
import {
  getAllTimeSlot,
  getTimeSlot,
  createTimeSlot,
  updateTimeSlot,
  deleteTimeSlot
} from '../controllers/timeSlot.controller'

const router = Router()

router.get('/', getAllTimeSlot)
router.get('/:id', getTimeSlot)
router.post('/', createTimeSlot)
router.put('/:id', updateTimeSlot)
router.delete('/:id', deleteTimeSlot)

export default router
