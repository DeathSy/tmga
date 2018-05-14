import GuideLine from '../models/guideline'

export const getAll = async query => {
  const result = await GuideLine.find({ query })
  return result
}

export const get = async id => {
  const result = await GuideLine.findById(id)
  return result
}

export const create = async guideline => {
  const result = await GuideLine.create(guideline)
  return result
}

export const update = async (id, guideline) => {
  const result = await GuideLine.findByIdAndUpdate(id, guideline)
  return result
}

export const remove = async id => {
  const result = await GuideLine.findByIdAndRemove(id)
  return result
}
