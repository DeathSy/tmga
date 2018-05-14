import { Router } from 'express'
import {
  getAllGuideline,
  getGuideline,
  createGuideline,
  updateGuildline,
  deleteGuideline
} from '../controllers/guideline.controller'

const router = Router()

router.get('/', getAllGuideline)
router.get('/:id', getGuideline)
router.post('/', createGuideline)
router.put('/:id', updateGuildline)
router.delete('/:id', deleteGuideline)

export default router
