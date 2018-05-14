import mongoose from 'mongoose'

export const sectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects'
  },
  startId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students'
  },
  endId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students'
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Sections', sectionSchema)
