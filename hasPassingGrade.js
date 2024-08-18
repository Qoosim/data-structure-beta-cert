// import { getGrade2 } from "./getGrade.mjs"
const getGrade2 = require("./getGrade")

const hasPassignGrade = (score) => {
    const returnGrade = getGrade2(score)
    if (returnGrade === "F") {
        return false
    } else {
        return true
    }
}

console.log(hasPassignGrade(100))
console.log(hasPassignGrade(53))
console.log(hasPassignGrade(87))
