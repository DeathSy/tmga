import mongoose from 'mongoose'

export const sectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: mongoose.Types.ObjectId,
    ref: 'Subjects'
  },
  startId: {
    type: mongoose.Types.ObjectId,
    ref: 'Students'
  },
  endId: {
    type: mongoose.Types.ObjectId,
    ref: 'Students'
  },
  amount: {
    type: Number,
    required: true
  },
  lecturers: [{
    type: mongoose.Types.ObjectId,
    ref: 'Lecturers'
  }],
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Sections', sectionSchema)
