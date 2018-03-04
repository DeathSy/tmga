import { mongoose } from '../config'

export const studentSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: String,
  updatedAt: String
})

export default mongoose.model('Students', studentSchema)
