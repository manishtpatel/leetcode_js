/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    result = 0

    for (let x = 0; x < height.length; x++) {
        let valX = height[x]

        for (let y = x + 1; y < height.length; y++) {
            if (x == y) continue

            let valY = height[y]
            let shortest = (valX < valY) ? valX : valY
            let area = shortest * (y - x)

            if (result < area)
                result = area
        }
    }

    return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))