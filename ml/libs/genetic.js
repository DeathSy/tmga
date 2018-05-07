// Data Structures

const studyDays = [
    { text: 'Monday', code: 'A' },
    { text: 'Tuesday', code: 'B' },
    { text: 'Wednesday', code: 'C' },
    { text: 'Thursday', code: 'D' },
    { text: 'Friday', code: 'E' },
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
    { start: '1800', end: '1830', code: '20' },
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
    { name: 'Training 4/2', building: 'SIT', type: 'lab', amount: 0, code: '13' },
]

const sections = [
    { name: 'IT Fundamental', lecturers: [{ _id: '', name: 'Mr.Kittiphan' }, { _id: '', name: 'Mr.Pichet' }], timeLimit: 180, type: 'lecture', code: 'INT101' },
    { name: 'Computer Programming 1', lecturers: [{ _id: '', name: 'Dr.Umaporn' }], timeLimit: 120, type: 'lab', code: 'INT102' },
    { name: 'Discrete Mathematics', lecturers: [{ _id: '', name: 'Mr.Olarn' }], timeLimit: 180, type: 'lecture', code: 'INT104' },
]

// Initial Individuals

const initIndividuals = () => {
    const dayWithTime = studyDays.reduce((dayResult, day) => {
        const cocatenatedCode = timeSlots.map(time => day.code.concat(time.code))
        return [...dayResult, ...cocatenatedCode]
    }, [])

    const roomWithDayAndTime = studyRooms.reduce((roomResult, room) => {
        const cocatenatedCode = dayWithTime.map(dayTime => dayTime.concat('-', room.code))
        return [...roomResult, ...cocatenatedCode]
    }, [])

    const timeArray = new Array(roomWithDayAndTime.length)
    const result = new Array(2)
    for (let i = 0; i < 2; i++) {
        sections.map(section => {
            const randNum = Math.floor((Math.random() * 3) + 4)
            while (true) {
                const index = Math.floor(Math.random() * timeArray.length)
                let count = 0
                while (count !== randNum) {
                    timeArray[index + count] = section
                    count++
                }
                result[i] = timeArray
                break;
            }
        })
    }

    return result
}

export const generateTimeTable = () => {
    const individuals = initIndividuals()
    return individuals
}
