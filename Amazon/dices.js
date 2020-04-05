/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, target) {
    var possibleValue = []

    for (let z = 1; z <= f; z++) {
        possibleValue.push(z)
    }

    // roll dice for given times
    for (let x = 1; x <= d - 1; x++) {
        let possibleValueTemp = [...possibleValue]
        possibleValue = []

        // all possible value for first roll
        for (let z = 1; z <= f; z++) {
            // for each roll add up possible values
            for (let y = 0; y < possibleValueTemp.length; y++) {
                var value = (z + possibleValueTemp[y]) % Math.pow(10, 9) + 7

                if(value <= target){
                    possibleValue.push(value )
                }
            }
        }
    }

    return possibleValue.filter(x => x === target).length
};


console.log(numRollsToTarget(30, 30, 500))