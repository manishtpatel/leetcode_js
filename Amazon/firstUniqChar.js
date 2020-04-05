/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if (s.length == 1)
        return 0

    let ignores = new Set()

    for (let x = 0; x < s.length; x++) {
        let valX = s[x]

        for (let y = x + 1; y < s.length; y++) {
            let valY = s[y]

            if (valX === valY) {
                ignores.add(valX)
                break;
            }

            if ((y === s.length - 1) && (!ignores.has(valX))) {
                return x
            }
        }
    }

    if (!ignores.has(s[s.length - 1])) return s.length - 1

    return -1
};

var firstUniqChar_hashmap = function (s) {
    if(s.length == 0) return -1

    let map = new Map()
    let index = -1

    for (const char of s) {
        index++
        
        let count = 1

        if (map.has(char)) {
            count = map.get(char)[0]

            map.set(char, [count + 1, index])
        } else {
            map.set(char, [1, index])
        }
    }

    for (const entry of map) {
        if(entry[1][0] == 1){
            return entry[1][1]
        }
    }

    return -1
};

console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar_hashmap("loveleetcode"))