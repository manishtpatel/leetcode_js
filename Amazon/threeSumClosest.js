/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var closestToTarget

    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (x === y) continue

            for (let z = 0; z < nums.length; z++) {
                if ((x === z) || (y === z)) continue

                let valX = nums[x]
                let valY = nums[y]
                let valZ = nums[z]

                let sum = (valX + valY + valZ)

                if (closestToTarget == undefined) {
                    closestToTarget = sum
                }

                if (Math.abs(closestToTarget - target) > Math.abs(sum - target)) {
                    closestToTarget = sum
                }
            }
        }
    }

    return closestToTarget
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))