import path from 'path'
import { spawn } from 'child_process'

let gaStatus = 'stopped'
let maxFitness = 0
let errorMessage

export const startGenerateSchedual = (req, res) => {
  if (gaStatus === 'stopped') {
    const projetPath = path.resolve(process.cwd())
    const ga = spawn(`babel-node.cmd`, ['libs/genetic'], { cwd: projetPath })
    gaStatus = 'running'
    ga.stdout.on('data', data => {
      if (data.toString().split('maxfitness:').length > 1) {
        const stdout = parseFloat(data.toString().split('maxfitness:')[1].trim(), 10)
        const nowFitness = Math.floor(stdout * 100)
        if (maxFitness === 100) {
          maxFitness = 0
        }
        if (nowFitness > maxFitness) {
          maxFitness = nowFitness
        }
        console.log('process status: ', maxFitness)
      } else {
        console.log(data.toString())
      }
    })

    ga.on('error', error => {
      maxFitness = 0
      errorMessage = error
      gaStatus = 'stopped'
      console.log(error)
    })

    ga.stderr.on('data', data => {
      maxFitness = 0
      errorMessage = data.toString()
      gaStatus = 'stopped'
    })

    ga.on('exit', code => {
      gaStatus = 'stopped'
      ga.kill()
    })

    res
      .status(200)
      .send({ message: 'Successfully started GA process, to check status please visit /generate/status route' })
  } else {
    res
      .status(200)
      .send({ message: 'GA process is already running if you want to run a new task please terminate an old one, to terminate GA process please visit /generate/terminate' })
  }
}

export const getTimetableGeneratingStatus = (req, res) => {
  let message
  if (gaStatus === 'stopped') message = 'GA process is not running yet, please visit /generate first to begin GA process'
  res.status(200).send({ status: maxFitness, error: errorMessage, message })
}

export const terminateGenerating = (req, res) => {
  res.status(500).send({ message: 'Sorry terminate is not an open feature yet' })
}
