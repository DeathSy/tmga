import mongoose from 'mongoose'

export const subjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  sections: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  timeAmount: {
    type: Number,
    required: true
  },
  prerequisite: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects'
  }]
})

export default mongoose.model('Subjects', subjectSchema)
