import { Router } from 'express'

import genetic from './genetic'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'api is running on port 4000' })
})

router.use('/generate', genetic)

export default router
