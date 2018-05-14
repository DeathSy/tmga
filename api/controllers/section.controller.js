import {
  getAll,
  get,
  create,
  update,
  remove
} from '../repositories/section.repo'

export const getAllSection = async (req, res) => {
  try {
    const result = await getAll(req.query)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getSection = async (req, res) => {
  try {
    const result = await get(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createSection = async (req, res) => {
  try {
    const result = await create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const updateSection = async (req, res) => {
  try {
    const result = await update(req.id, req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const deleteSection = async (req, res) => {
  try {
    const result = await remove(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
