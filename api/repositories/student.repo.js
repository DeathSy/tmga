import Student from '../models/student'

export const getAll = async query => {
  const result = await Student.find({ query })
  return result
}

export const get = async id => {
  const result = await Student.findById(id)
  return result
}

export const create = async student => {
  const result = await Student.create(student)
  return result
}

export const update = async (id, student) => {
  const result = await Student.findByIdAndUpdate(id, student)
  return result
}

export const remove = async id => {
  const result = await Student.findByIdAndRemove(id)
  return result
}
