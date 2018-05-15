import _ from 'lodash'
const studyDays = [
  { text: 'Monday', code: 'A' },
  { text: 'Tuesday', code: 'B' },
  { text: 'Wednesday', code: 'C' },
  { text: 'Thursday', code: 'D' },
  { text: 'Friday', code: 'E' }
]

const timeSlots = [
  { start: '0800', end: '0830', code: '00' },
  { start: '0830', end: '0900', code: '01' },
  { start: '0900', end: '0930', code: '02' },
  { start: '0930', end: '1000', code: '03' },
  { start: '1000', end: '1030', code: '04' },
  { start: '1030', end: '1100', code: '05' },
  { start: '1100', end: '1130', code: '06' },
  { start: '1130', end: '1200', code: '07' },
  { start: '1200', end: '1230', code: '08' },
  { start: '1230', end: '1300', code: '09' },
  { start: '1300', end: '1330', code: '10' },
  { start: '1330', end: '1400', code: '11' },
  { start: '1400', end: '1430', code: '12' },
  { start: '1430', end: '1500', code: '13' },
  { start: '1500', end: '1530', code: '14' },
  { start: '1530', end: '1600', code: '15' },
  { start: '1600', end: '1630', code: '16' },
  { start: '1630', end: '1700', code: '17' },
  { start: '1700', end: '1730', code: '18' },
  { start: '1730', end: '1800', code: '19' },
  { start: '1800', end: '1830', code: '20' }
]

const studyRooms = [
  { name: 'CB2301', building: 'CB2', type: 'lecture', amount: 0, code: '00' },
  { name: 'CB2304', building: 'CB2', type: 'lecture', amount: 0, code: '01' },
  { name: 'CB2305', building: 'CB2', type: 'lecture', amount: 0, code: '02' },
  { name: 'CB2306', building: 'CB2', type: 'lecture', amount: 0, code: '03' },
  { name: 'CB2308', building: 'CB2', type: 'lecture', amount: 0, code: '04' },
  { name: 'CB2312', building: 'CB2', type: 'lecture', amount: 0, code: '05' },
  { name: 'CB2313', building: 'CB2', type: 'lecture', amount: 0, code: '06' },
  { name: 'Training 1/1', building: 'SIT', type: 'lab', amount: 0, code: '07' },
  { name: 'Training 1/2', building: 'SIT', type: 'lab', amount: 0, code: '08' },
  { name: 'Training 1/3', building: 'SIT', type: 'lab', amount: 0, code: '09' },
  { name: 'Training 1/4', building: 'SIT', type: 'lab', amount: 0, code: '10' },
  { name: 'Training 1/5', building: 'SIT', type: 'lab', amount: 0, code: '11' },
  { name: 'Training 4/1', building: 'SIT', type: 'lecture', amount: 0, code: '12' },
  { name: 'Training 4/2', building: 'SIT', type: 'lab', amount: 0, code: '13' }
]

const sections = [
  { name: 'IT Fundamental', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }, { _id: '', name: 'Mr.Pichet' }], timeLimit: 180, major: 'BSc.IT', type: 'lecture', code: 'INT101-A-LE' },
  { name: 'IT Fundamental', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }, { _id: '', name: 'Mr.Pichet' }], timeLimit: 180, major: 'BSc.IT', type: 'lecture', code: 'INT101-B-LE' },
  { name: 'IT Fundamental', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }, { _id: '', name: 'Mr.Pichet' }], timeLimit: 180, major: 'BSc.IT', type: 'lecture', code: 'INT101-C-LE' },
  { name: 'Computer Programming 1', lecturers: [{ _id: '', name: 'Dr.Umaporn' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT102-A-LA' },
  { name: 'Computer Programming 1', lecturers: [{ _id: '', name: 'Dr.Pisarn' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT102-B-LA' },
  { name: 'Computer Programming 1', lecturers: [{ _id: '', name: 'Dr.Umaporn' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT102-C-LA' },
  { name: 'Computer Programming 1', lecturers: [{ _id: '', name: 'Dr.Pisarn' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT102-D-LA' },
  { name: 'Discrete Mathematics', lecturers: [{ _id: '', name: 'Mr.Olarn' }], timeLimit: 180, type: 'lecture', major: 'BSc.IT', code: 'INT104-A-LE' },
  { name: 'Discrete Mathematics', lecturers: [{ _id: '', name: 'Mr.Olarn' }], timeLimit: 180, type: 'lecture', major: 'BSc.IT', code: 'INT104-B-LE' },
  { name: 'Discrete Mathematics', lecturers: [{ _id: '', name: 'Mr.Olarn' }], timeLimit: 180, type: 'lecture', major: 'BSc.IT', code: 'INT104-C-LE' },
  { name: 'Big Data Analysist', lecturers: [{ _id: '', name: 'Dr.Pisarn' }], timeLimit: 180, type: 'lab', major: 'BSc.IT', code: 'INT492-A-LE' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Pichai' }], timeLimit: 120, type: 'lecture', major: 'BSc.IT', code: 'INT201-A-LE' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Pichai' }], timeLimit: 120, type: 'lecture', major: 'BSc.IT', code: 'INT201-B-LE' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT201-A-LA' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT201-B-LA' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT201-C-LA' },
  { name: 'Network 1', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }], timeLimit: 120, type: 'lab', major: 'BSc.IT', code: 'INT201-D-LA' }
]

export default class DNA {
  constructor (newGenes) {
    this.fitness = 0
    if (newGenes) {
      this.genes = newGenes
    } else {
      const dayWithTime = studyDays.reduce((dayResult, day) => {
        const cocatenatedCode = timeSlots.map(time => day.code.concat(time.code))
        return [...dayResult, ...cocatenatedCode]
      }, [])

      const roomWithDayAndTime = studyRooms.reduce((roomResult, room) => {
        const cocatenatedCode = dayWithTime.map(dayTime => dayTime.concat('-', room.code))
        return [...roomResult, ...cocatenatedCode]
      }, [])

      const timeArray = roomWithDayAndTime.map(code => ({ code, section: undefined }))
      sections.map(section => {
        const randNum = Math.floor((Math.random() * 3) + 4)
        const index = Math.floor(Math.random() * timeArray.length)
        let count = 0
        while (count !== randNum) {
          if (index + count < timeArray.length) {
            timeArray[index + count].section = section
          }
          count++
        }
      })
      this.genes = timeArray
    }
  }

  transfromToTimeBaseGene () {
    const dayWithTime = studyDays.reduce((dayResult, day) => {
      const cocatenatedCode = timeSlots.map(time => day.code.concat(time.code))
      return [...dayResult, ...cocatenatedCode]
    }, [])

    const roomWithDayAndTime = studyRooms.reduce((roomResult, room) => {
      const cocatenatedCode = dayWithTime.map(dayTime => dayTime.concat('-', room.code))
      return [...roomResult, ...cocatenatedCode]
    }, [])

    const timeArray = roomWithDayAndTime.map(code => ({ code, section: undefined }))
    timeArray.map(array => {
      this.sectionBaseGenes
        .filter(gene => gene.time.includes(array.code))
        .map(gene => {
          array.section = sections.filter(section => section.code === gene.sectionCode)[0]
        })
      return array
    })
    this.genes = timeArray
    return this.genes
  }

  transformToSectionBaseGene () {
    const sections = _.uniq(this.genes
      .filter(gene => gene.section)
      .map(gene => gene.section.code))
    const transformedGene = sections.map(section => {
      const sectionTimeCode = this.genes
        .filter(gene => gene.section)
        .filter(gene => gene.section.code === section)
        .map(gene => gene.code)
      return { sectionCode: section, time: sectionTimeCode }
    })
    return transformedGene
  }

  transformToLecturerBaseGene () {
    const lecturersName = _.uniq(this.genes
      .filter(gene => gene.section)
      .reduce((result, gene) => {
        const lecturers = gene.section.lecturers
          .map(lecturer => lecturer)
        return [...result, ...lecturers]
      }, []))
    const combindTimeWithLecturer = lecturersName.map(lecturer => {
      const sectionTimeCode = this.genes
        .filter(gene => gene.section)
        .filter(gene => _.includes(gene.section.lecturers, lecturer))
        .map(gene => gene.code)
      return { lecturer, time: sectionTimeCode }
    })
    const transformedGene = combindTimeWithLecturer.reduce((result, block) => {
      if (result.length) {
        const filteredResult = result.filter(res => res.lecturer.name === block.lecturer.name)[0]
        if (filteredResult) {
          filteredResult.time = filteredResult.time.concat(block.time)
          return [...result, ...filteredResult]
        }
      }
      return [...result, block]
    }, [])
    return transformedGene
  }

  calcFitness () {
    let score = 0
    let checkCount = 0
    for (let iterator = 0; iterator < this.genes.length; iterator++) {
      if (this.genes[iterator].section) {
        // check whether room type is match the section type
        const roomsType = studyRooms
          .filter(room => this.genes[iterator].code.split('-')[1] === room.code)
          .map(room => room.type)[0]
        const sectionType = this.genes[iterator].section.type
        if (sectionType === roomsType) score++

        checkCount++
      }
    }
    const sectionBaseGene = this.transformToSectionBaseGene()
    sectionBaseGene.map(gene => {
      // check time limit for each section
      const sectionTimeLimit = sections
        .filter(section => section.code === gene.sectionCode)
        .map(section => section.timeLimit)[0]
      if (sectionTimeLimit / 30 === gene.time.length) score++

      checkCount++
    })
    const lecturerBaseGene = this.transformToLecturerBaseGene()
    lecturerBaseGene.map(gene => {
      // check if lecturer teach on the same time
      const time = gene.time.map(time => time.split('-')[0])
      const unique = _.uniq(time).length === time.length
      if (unique) score++

      checkCount++
    })
    this.fitness = score / checkCount
    return this.fitness
  }

  crossover (mother) {
    const sectionBaseFather = this.transformToSectionBaseGene()
    const sectionBaseMother = mother.transformToSectionBaseGene()

    const midPoint = Math.floor(sectionBaseFather.length / 2)
    const sectionBaseChild = [
      ...sectionBaseFather.slice(0, midPoint),
      ...sectionBaseMother.slice(midPoint + 1)]
    const child = new DNA()
    child.sectionBaseGenes = sectionBaseChild
    child.genes = child.transfromToTimeBaseGene()
    return child
  }

  mutate (mutationRate) {
    const dayWithTime = studyDays.reduce((dayResult, day) => {
      const cocatenatedCode = timeSlots.map(time => day.code.concat(time.code))
      return [...dayResult, ...cocatenatedCode]
    }, [])

    const roomWithDayAndTime = studyRooms.reduce((roomResult, room) => {
      const cocatenatedCode = dayWithTime.map(dayTime => dayTime.concat('-', room.code))
      return [...roomResult, ...cocatenatedCode]
    }, [])

    let sectionBaseGene = this.sectionBaseGenes
    sectionBaseGene = sectionBaseGene.map(gene => {
      if (Math.random() < mutationRate) {
        gene.time = []
        const randNum = Math.floor((Math.random() * 3) + 4)
        const index = Math.floor(Math.random() * roomWithDayAndTime.length)
        let count = 0
        while (count !== randNum) {
          if (index + count < roomWithDayAndTime.length) {
            gene.time.push(roomWithDayAndTime[index + count])
          }
          count++
        }
      }
      return gene
    })
    this.sectionBaseGenes = sectionBaseGene
    this.transfromToTimeBaseGene()
  }
}
