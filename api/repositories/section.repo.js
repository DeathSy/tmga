import Section from '../models/section'

export const getAll = async query => {
  const result = await Section.find({ query })
  return result
}

export const get = async id => {
  const result = await Section.findById(id)
  return result
}

export const create = async section => {
  console.log(section)
  const result = await Section.create(section)
  return result
}

export const update = async (id, section) => {
  const result = await Section.findByIdAndUpdate(id, section)
  return result
}

export const remove = async id => {
  const result = await Section.findByIdAndRemove(id)
  return result
}
