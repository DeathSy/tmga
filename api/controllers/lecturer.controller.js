import {
  getAll,
  get,
  create,
  update,
  remove
} from '../repositories/lecturer.repo'

export const getAllLecturer = async (req, res) => {
  try {
    const result = await getAll(req.query)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getLecturer = async (req, res) => {
  try {
    const result = await get(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createLecturer = async (req, res) => {
  try {
    const result = await create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const updateLecturer = async (req, res) => {
  try {
    const result = await update(req.id, req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const deleteLecturer = async (req, res) => {
  try {
    const result = await remove(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}