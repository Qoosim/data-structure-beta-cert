const getAverage = require('./getAverage')
const getGrade2 = require('./getGrade')

const studentMsg = (totalScores, studentScore) => {
    const avgResult = getAverage(totalScores)
    const gradeResult = getGrade2(studentScore)
    let finalResult = ""
    if (gradeResult === "F") {
        finalResult = `Class average: ${avgResult}. Your grade: ${gradeResult}. You failed the course.`
    } else {
        finalResult = `Class average: ${avgResult}. Your grade: ${gradeResult}. You passed the course.`
    }
    return finalResult;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))