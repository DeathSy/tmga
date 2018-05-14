import mongoose from 'mongoose'

export const roomSchema = mongoose.Schema({
  building: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  capacity: {
    type: String,
    required: true
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
})

export default mongoose.model('Rooms', roomSchema)
