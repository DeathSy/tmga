import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'api is running on port 4000' })
})

export default router
