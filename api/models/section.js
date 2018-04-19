import mongoose from 'mongoose'

export const sectionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Sections', sectionSchema)
