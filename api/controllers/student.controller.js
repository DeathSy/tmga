import {
  getAll,
  get,
  create,
  update,
  remove
} from '../repositories/student.repo'

export const getAllStudent = async (req, res) => {
  try {
    const result = await getAll(req.query)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getStudent = async (req, res) => {
  try {
    const result = await get(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createStudent = async (req, res) => {
  try {
    const result = await create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const updateStudent = async (req, res) => {
  try {
    const result = await update(req.id, req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const deleteStudent = async (req, res) => {
  try {
    const result = await remove(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
