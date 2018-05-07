import { exec } from 'child-process-promise'
import { generateTimeTable } from '../libs/genetic'

export const startGenerateSchedual = (req, res) => {
    const data = generateTimeTable()

  res.send(data)
}
