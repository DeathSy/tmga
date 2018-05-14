import { Router } from 'express'
import {
  getAllStudent,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/student.controller'

const router = Router()

router.get('/', getAllStudent)
router.get('/:id', getStudent)
router.post('/', createStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)

export default router
