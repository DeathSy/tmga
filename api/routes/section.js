import { Router } from 'express'
import {
  getAllSection,
  getSection,
  createSection,
  updateSection,
  deleteSection
} from '../controllers/section.controller'

const router = Router()

router.get('/', getAllSection)
router.get('/:id', getSection)
router.post('/', createSection)
router.put('/:id', updateSection)
router.delete('/:id', deleteSection)

export default router
