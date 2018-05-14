import Lecturer from '../models/lecturer'

export const getAll = async query => {
  const result = await Lecturer.find({ query })
  return result
}

export const get = async id => {
  const result = await Lecturer.findById(id)
  return result
}

export const create = async lecturer => {
  const result = await Lecturer.create(lecturer)
  return result
}

export const update = async (id, lecturer) => {
  const result = await Lecturer.findByIdAndUpdate(id, lecturer)
  return result
}

export const remove = async id => {
  const result = await Lecturer.findByIdAndRemove(id)
  return result
}
