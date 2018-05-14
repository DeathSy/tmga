import { Router } from 'express'

import guideline from './guideline'
import lecturer from './lecturer'
import room from './room'
import section from './section'
import student from './student'
import subject from './subject'
import timeSlot from './timeslot'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'api is running' })
})

router.use('/guidelines', guideline)
router.use('/lecturers', lecturer)
router.use('/rooms', room)
router.use('/sections', section)
router.use('/students', student)
router.use('/subjects', subject)
router.use('/timeSlots', timeSlot)

export default router
