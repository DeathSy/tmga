import {
  getAll,
  get,
  create,
  update,
  remove
} from '../repositories/room.repo'

export const getAllRoom = async (req, res) => {
  try {
    const result = await getAll(req.query)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const getRoom = async (req, res) => {
  try {
    const result = await get(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createRoom = async (req, res) => {
  try {
    const result = await create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const updateRoom = async (req, res) => {
  try {
    const result = await update(req.id, req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const deleteRoom = async (req, res) => {
  try {
    const result = await remove(req.id)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
