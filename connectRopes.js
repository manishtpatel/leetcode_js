var ropes = [8, 4, 6, 12]
var cost = 0
var val1 = 0

while (true) {
    ropes = ropes.sort((a, b) => a - b)

    var val1 = ropes.shift()
    var val2 = ropes.shift()

    if (val2 === undefined) {
        console.log(cost)
        break
    }

    cost += val1 + val2

    ropes.push(val1 + val2)

    console.log(ropes, cost)
}