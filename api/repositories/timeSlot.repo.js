import TimeSlot from '../models/timeSlot'

export const getAll = async query => {
  const result = await TimeSlot.find({ query })
  return result
}

export const get = async id => {
  const result = await TimeSlot.findById(id)
  return result
}

export const create = async timeSlot => {
  const result = await TimeSlot.create(timeSlot)
  return result
}

export const update = async (id, timeSlot) => {
  const result = await TimeSlot.findByIdAndUpdate(id, timeSlot)
  return result
}

export const remove = async id => {
  const result = await TimeSlot.findByIdAndRemove(id)
  return result
}
