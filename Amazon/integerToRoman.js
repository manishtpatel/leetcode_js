// RETURN: [NewNum, resultString]

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var thousands = ["", "M", "MM", "MMM"]
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

    return thousands[Math.floor(num / 1000)]
        + hundreds[Math.floor(num % 1000 / 100)]
        + tens[Math.floor((num % 100 / 10))]
        + ones[Math.floor(num % 10)];
};

console.log(intToRoman(999))

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let values = new Map()
    values.set('M', 1000)
    values.set('D', 500)
    values.set('C', 100)
    values.set('L', 50)
    values.set('X', 10)
    values.set('V', 5)
    values.set('I', 1)

    let total = 0

    for (let index = 0; index < s.length; index++) {
        let char1 = s[index]
        let char2 = s[index + 1]

        // find outlier
        if (!!char2 && (values.get(char1) < values.get(char2))) {
            total += values.get(char2) - values.get(char1)
            index++
        } else {
            total += values.get(char1)
        }
    }

    return total
};

console.log(romanToInt('IV'))