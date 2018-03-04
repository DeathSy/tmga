import Student from '../models/student'

export const getAllStudents = async (req, res) => {
  try {
    const { data } = await Student.find(req.quey)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).send(err)
  }
}
