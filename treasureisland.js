var treasuremap = [
    ['O', 'O', 'O', 'O'],
    ['D', 'O', 'D', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'D', 'D', 'O']]

// use DFS
doDFS = () => {
    firstNode = treasuremap[0][0]
    allNodes = [firstNode]
    nodeTrack = [firstNode]

    findNextNode = (node) => {

    }
}

// I bet first then you bet all options, after each option i bet again

var result = []

result.includes()

var string ='test'



letsBet = (me, left) => {
    if (left <= 3) {
        // me(true/false) won
        console.log('won', me, left)

        return me
    }

    for (let i = 1; i <= 3; i++) {
        let newLeft = left - i

        // now next person turn
        const won = letsBet(!me, newLeft)

        // if not won then continue
        if (won) {
            return true
        }
    }

    // lost, return other person won
    return !me
}

// for (let index = 0; index < 30; index++) {
    // i start
    console.log(letsBet(true, 8))
// }