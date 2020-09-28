const fs = require('fs')
const data = fs.readFileSync('./fighters.JSON')
const parsedData = JSON.parse(data)
// console.log(data)
let fightData = parsedData.fighters
console.log(fightData)



let updatedFighters = () => {
    let powerLevels = fightData.map( x => x.powerLevel ) // array of all power levels 
    console.log(powerLevels)
    let lowestPower = Math.min(...powerLevels)
    console.log(typeof(lowestPower))
    const findLowIndex = (element) => {
        element.powerLevel <= lowestPower
    }
    console.log(findLowIndex())
    let lowestIndex = fightData.findIndex(findLowIndex)
    // console.log(lowestIndex)
    // console.log(lowestPower)
    // // let lowIndex = powerLevels.findIndex(lowestPower)
    // // let lowestPowerFighter = fightData.find(obj => obj.powerLevel == lowestPower)

    // console.log(powerLevels)

    // console.log(lowestPowerFighter)
    // console.log(position)
}
// console.log(parsedData)
// console.log(fightData)

updatedFighters()



module.exports = {
    updatedFighters
}
