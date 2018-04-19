import mongoose from 'mongoose'

export const lecturerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teachSubjects: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Sections'
  }],
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Lecturers', lecturerSchema)
