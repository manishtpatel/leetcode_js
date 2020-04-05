/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)

    let retVal = new Map()

    for (let x = 0; x < nums.length; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            for (let z = y + 1; z < nums.length; z++) {
                let sum = (nums[x] + nums[y] + nums[z])

                if (sum === 0) {
                    let stringResult = nums[x].toString() + nums[y].toString() + nums[z].toString()

                    retVal.set(stringResult, [nums[x], nums[y], nums[z]])
                }

                if (sum > 0) {
                    continue
                }
            }
        }
    }

    let result = []

    for (const x of retVal) {
        result.push(x[1])
    }

    return result
};

console.log(threeSum([-3, -12, -3, -9, 14, 4, 8, -4, 11, 4, 7, -8, -5, 4, 7, -12, 2, 9, 6, -12, 8, -5, -14, 5, 3, 11, 14, -6, -5, 10, -8, 0, 6, 5, 6, 5, -6, -9, -13, 12, 2, 1, -10, 13, 13, 4, -14, 0, -2, 0, -5, 13, 10, -12, -5, -9, -15, -13, -8, -13, 12, -1, -6, 3, 11, 7, -14, -9, 14, 10, 10, -7, -4, -15, -9, -6, 4, -15, 2, 10, -8, 12, 0, 9, -14, 11, -15, 8, 13, 14, 10, 2, -9, -10, 13, -13, 12, 14, -15, 3, 1, 11, 12, 12, 11, 10]))
console.log('done')