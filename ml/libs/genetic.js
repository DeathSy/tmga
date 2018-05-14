import Population from './population'
// import DNA from './dna'

export const generateTimeTable = async () => {
  // setup genetics
  const population = new Population(0.7, 250)

  // into ga loop
  let res
  while (population.maxFitness < 1) {
    population.calcFitness()
    population.naturalSelection()
    population.generate()

    console.log(`generation: ${population.generations}, maxfitness: ${population.maxFitness}`)
    if (population.maxFitness === 1) {
      res = await population.evaluate()
      console.log('timetable is save successfully')
    }
  }
  return {
    generations: population.generations,
    maxFitness: population.maxFitness
  }
}

generateTimeTable()
