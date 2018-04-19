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
  },
  prerequisite: [{
    type: mongoose.Types.ObjectId,
    ref: 'Subjects'
  }]
})

export default mongoose.model('Subjects', subjectSchema)
