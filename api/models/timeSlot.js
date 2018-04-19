import mongoose from 'mongoose'

export const timeSlotSchema = mongoose.Schema({
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
})

export default mongoose.model('TimeSlots', timeSlotSchema)
