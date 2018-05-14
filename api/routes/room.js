import { Router } from 'express'
import {
  getAllRoom,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
} from '../controllers/room.controller'

const router = Router()

router.get('/', getAllRoom)
router.get('/:id', getRoom)
router.post('/', createRoom)
router.put('/:id', updateRoom)
router.delete('/:id', deleteRoom)

export default router
