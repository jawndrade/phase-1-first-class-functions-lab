// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, passingDriverFunction) => {
    return passingDriverFunction(arrayOfDrivers)
}