import Subject from '../models/subject'

export const getAll = async query => {
  const result = await Subject.find({ query })
  return result
}

export const get = async id => {
  const result = await Subject.findById(id)
  return result
}

export const create = async subject => {
  const result = await Subject.create(subject)
  return result
}

export const update = async (id, subject) => {
  const result = await Subject.findByIdAndUpdate(id, subject)
  return result
}

export const remove = async id => {
  const result = await Subject.findByIdAndRemove(id)
  return result
}
