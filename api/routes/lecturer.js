import { Router } from 'express'
import {
  getAllLecturer,
  getLecturer,
  createLecturer,
  updateLecturer,
  deleteLecturer
} from '../controllers/lecturer.controller'

const router = Router()

router.get('/', getAllLecturer)
router.get('/:id', getLecturer)
router.post('/', createLecturer)
router.put('/:id', updateLecturer)
router.delete('/:id', deleteLecturer)

export default router
