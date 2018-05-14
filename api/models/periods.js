import mongoose from 'mongoose'

export const periodSchema = mongoose.Schema({
  semester: {
    type: String,
    required: true
  },
  timetable: {
    type: Array,
    default: []
  },
  createdAt: {
    type: String
  },
  updatedAt: {
    type: String
  }
})

export default mongoose.model('Periods', periodSchema)
