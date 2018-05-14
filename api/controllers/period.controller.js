import Periods from '../models/periods'

export const getAllPeriod = async (req, res) => {
  try {
    const result = await Periods.find()
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}

export const createPeriod = async (req, res) => {
  try {
    const result = await Periods.create(req.body)
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send(err)
  }
}
