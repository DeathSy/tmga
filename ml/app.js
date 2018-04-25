import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

app.use('/api/v1', routes)

export default app
