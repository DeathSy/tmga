import DNA from './dna'
import axios from 'axios'

export default class Population {
  constructor (mutationRate, populationMax) {
    this.mutationRate = mutationRate
    this.population = []
    this.matingPool = []
    this.generations = 0
    this.maxFitness = 0
    for (let pop = 0; pop < populationMax; pop++) {
      this.population[pop] = new DNA()
    }
  }

  calcFitness () {
    this.population.map(dna => {
      dna.calcFitness()
    })
  }

  naturalSelection () {
    this.matingPool = []

    let maxFitness = 0
    this.population.map(dna => {
      if (dna.fitness > maxFitness) {
        maxFitness = dna.fitness
        this.maxFitnessGene = dna
      }
    })
    this.maxFitness = maxFitness

    this.population.map(dna => {
      const fitness = dna.fitness / maxFitness
      const size = Math.floor(fitness * 100)
      for (let arraySize = 0; arraySize < size; arraySize++) {
        this.matingPool.push(dna)
      }
    })
  }

  generate () {
    this.population.map((dna, index) => {
      const fatherIndex = Math.floor(Math.random() * this.matingPool.length)
      const motherIndex = Math.floor(Math.random() * this.matingPool.length)
      const father = this.matingPool[fatherIndex]
      const mother = this.matingPool[motherIndex]
      const child = father.crossover(mother)
      child.mutate(this.mutationRate)
      this.population[index] = child
    })
    this.generations++
  }

  async evaluate () {
    const { data } = await axios.post('http://localhost:4000/api/v1/periods', {
      semester: '2/2560',
      timetable: this.maxFitnessGene.genes,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return data
  }
}
