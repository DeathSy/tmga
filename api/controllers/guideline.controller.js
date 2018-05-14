import {
  getAll,
  get,
  create,
  update,
  remove
} from '../repositories/guideline.repo'

export const getAllGuideline = async (req, res) => {
  try {
    const result = await getAll(req.query)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getGuideline = async (req, res) => {
  try {
    const result = await get(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createGuideline = async (req, res) => {
  try {
    const result = await create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const updateGuildline = async (req, res) => {
  try {
    const result = await update(req.id, req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const deleteGuideline = async (req, res) => {
  try {
    const result = await remove(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
