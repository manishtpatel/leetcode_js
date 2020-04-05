// Input:
var input =
    [[0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]]

isAllZombie = (input) => {
    var retVal = true;

    for (const x of input) {
        for (const y of x) {
            if (y === 0) {
                retVal = false;
                break
            }
        }

        if (!retVal) break;
    }

    return retVal
}

turnZombie = (input2) => {
    var newData = []

    for (let index = 0; index < input2.length; index++) {
        var row = input[index]
        var newRow = []

        for (let indexy = 0; indexy < row.length; indexy++) {
            var value = input[index][indexy]

            if (value == 1) {
                newRow.push(1)
                continue
            }

            var x1 = 0, x2 = 0, y1 = 0, y2 = 0

            if (indexy - 1 > 0) {
                x1 = input[index][indexy - 1]
            }

            if (indexy + 1 < row.length) {
                x2 = input[index][indexy + 1]
            }

            if (index - 1 > 0) {
                y1 = input[index - 1][indexy]
            }

            if (index + 1 < input2.length) {
                y2 = input[index + 1][indexy]
            }

            newRow.push((x1 || x2 || y1 || y2) ? 1 : 0)
        }

        newData.push(newRow)
    }

    return newData
}

doIt = () => {
    var hours = 0

    while (!isAllZombie(input)) {
        input = turnZombie(input)
        hours++
    }

    return hours
}

var hours = doIt()

console.log(hours)