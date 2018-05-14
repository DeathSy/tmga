import Room from '../models/room'

export const getAll = async query => {
  const result = await Room.find({ query })
  return result
}

export const get = async id => {
  const result = await Room.findById(id)
  return result
}

export const create = async room => {
  const result = await Room.create(room)
  return result
}

export const update = async (id, room) => {
  const result = await Room.findByIdAndUpdate(id, room)
  return result
}

export const remove = async id => {
  const result = await Room.findByIdAndRemove(id)
  return result
}