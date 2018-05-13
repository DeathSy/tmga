// import { spawn } from 'child-process-promise'
import path from 'path'
import { spawn } from 'child_process'

let maxFitness = 0
let errorMessage

export const startGenerateSchedual = (req, res) => {
  const projetPath = path.resolve(process.cwd())
  const ga = spawn(`babel-node.cmd`, ['libs/genetic'], { cwd: projetPath })
  ga.stdout.on('data', data => {
    const stdout = parseFloat(data.toString().split('maxfitness:')[1].trim(), 10)
    const nowFitness = Math.floor(stdout * 100)
    if (maxFitness === 100) {
      maxFitness = 0
    }
    if (nowFitness > maxFitness) {
      maxFitness = nowFitness
    }
    console.log(maxFitness)
  })

  ga.on('error', error => {
    maxFitness = 0
    errorMessage = error
    console.log(error)
  })

  ga.stderr.on('data', data => {
    maxFitness = 0
    errorMessage = data.toString()
  })

  res.send({ message: 'ga is running' })
}

export const getTimetableGeneratingStatus = (req, res) => {
  res.send({ status: maxFitness, error: errorMessage })
}
