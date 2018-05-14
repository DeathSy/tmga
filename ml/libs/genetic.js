import Population from './population'
// import DNA from './dna'

export const generateTimeTable = () => {
  // setup genetics
  const population = new Population(0.7, 250)

  // into ga loop
  while (population.maxFitness < 1) {
    population.calcFitness()
    population.naturalSelection()
    population.generate()

    console.log(`generation: ${population.generations}, maxfitness: ${population.maxFitness}`)
  }
  return {
    generations: population.generations,
    maxFitness: population.maxFitness
  }
}

generateTimeTable()
