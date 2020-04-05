/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    let billion = num / 1000000000
    let million = (num / 1000000000) / 1000000
    let thousand = ((num / 1000000000) / 1000000) / 1000
    let rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000

    let result = ''

    if( billion != 0){
        result += ' Billion'
    }
};