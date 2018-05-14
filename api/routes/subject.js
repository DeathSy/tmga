import { Router } from 'express'
import {
  getAllSubject,
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject
} from '../controllers/subject.controller'

const router = new Router()

router.get('/', getAllSubject)
router.get('/:id', getSubject)
router.post('/', createSubject)
router.put('/:id', updateSubject)
router.delete('/:id', deleteSubject)

export default router
