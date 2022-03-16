// const findMatching = drivers.filter(drivers => drivers.'Bobby' && drivers.'Sammy')

// return findMatching

function findMatching(drivers, name) {
    return drivers.filter((driverName) => { return driverName.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch(drivers, letterMatch) {
    return drivers.filter((driverName) => { return driverName.slice(0, letterMatch.length) === letterMatch });
}

function matchName(drivers, matching) {
    return drivers.filter((driverInfo) => {return driverInfo.name === matching})
}