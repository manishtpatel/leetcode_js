var lengthOfLongestSubstring = function (s) {
    if(s.length == 0) return 0
    if(s.length == 1) return 1

    let longestLength = 0
    let longestValue = null

    for (let x = 0; x < s.length; x++) {
        for (let y = x; y < s.length; y++) {
            let subString = s.slice(x, y + 1)

            var repeat = subString.slice(0, subString.length - 1).indexOf(subString[subString.length - 1])

            if(repeat >= 0) break

            // we found new longest, replace
            if (longestLength < y + 1 - x) {
                longestLength = y + 1 - x
                longestValue = subString
            }
        }
    }

    return longestLength
};

var result = lengthOfLongestSubstring('au')

console.log(result)
