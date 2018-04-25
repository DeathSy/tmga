import { exec } from 'child-process-promise'

export const startGenerateSchedual = (req, res) => {
  exec('babel-node models/genetic.js')
    .then(({ stdout }) => {
      console.log(stdout)
    })
    .catch(({ stderr }) => {
      console.log(stderr)
    })

  res.send({ message: 'Timetable is start generating' })
}
