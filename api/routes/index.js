import { Router } from 'express'

import student from './student'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'api is running' })
})

router.use('/students', student)

export default router
