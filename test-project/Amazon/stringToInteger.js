/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let x
    let isPositive = true;
    let result = 0

    for (x = 0; x < str.length; x++) {
        let valX = str[x]

        // if emptySpace then continue
        if (valX == ' ') continue
        if (valX == '+') break
        if (valX == '-') {
            isPositive = false
            break
        }

        break
    }

    for (let y = x; y < str.length; y++) {
        if (str[y] == '+') continue
        if (str[y] == '-') continue

        let subString = str.slice(x, y + 1)

        if (!isNaN(parseInt(subString, 10))) {
            result = parseInt(subString, 10)

            if (result > Math.pow(2, 31) - 1) {
                result = Math.pow(2, 31) - 1
            }

            if (result < Math.pow(-2, 31)) {
                result = Math.pow(-2, 31)
            }

        } else {
            break
        }
    }

    return result
};

console.log(myAtoi("-2"))