// import { exec } from 'child-process-promise'
import { generateTimeTable } from '../libs/genetic'

export const startGenerateSchedual = (req, res) => {
  const ind = generateTimeTable()
  res.send({ message: 'genetic alogorithm is starting', initialIndividual: ind })
}
