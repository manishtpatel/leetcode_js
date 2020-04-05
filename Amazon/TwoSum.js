var nums = [2, 7, 11, 15], target = 26

var twoSum = (nums, target) => {
    for (let x = 0; x < nums.length; x++) {
        const valX = nums[x];
        for (let y = 0; y < nums.length; y++) {
            const valY = nums[y];

            if(x === y) continue

            if(valX + valY === target){
                return [x, y]
            }
        }
    }
}

var result = twoSum(nums, target)

console.log(result)