import mongoose from 'mongoose'
require('dotenv').config()

mongoose.Promise = global.Promise

const mongoUrl = process.env.MONGO_URL
const mongoPort = process.env.MONGO_PORT
const mongoDb = process.env.MONGO_DB
const mongoOptions = {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD
}

mongoose.connect(
  `mongodb://${mongoUrl}:${mongoPort}/${mongoDb}`,
  mongoOptions,
  function (err) {
    if (err) throw new Error(err)
  }
)

export default mongoose
