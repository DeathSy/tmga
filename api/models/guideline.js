import mongoose from 'mongoose'

export const guidelineSchema = mongoose.Schema({
  year: {
    type: String,
    required: true
  },
  studyIn: {
    type: String,
    required: true
  }
})

export default mongoose.model('Guidelines', guidelineSchema)
