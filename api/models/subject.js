import mongoose from 'mongoose'

export const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  type: {
    tpye: String,
    required: true
  }
})

export default mongoose.model('Subjects', subjectSchema)
