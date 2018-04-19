import mongoose from 'mongoose'

export const lecturerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Lecturers', lecturerSchema)
