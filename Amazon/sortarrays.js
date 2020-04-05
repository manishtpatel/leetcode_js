/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let filteredArr1 = arr1.filter(a => arr2.includes(a)).sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))

    let nonArr2Arr1 = arr1.filter(a => !arr2.includes(a)).sort((a, b) => a - b)

    return [...filteredArr1, ...nonArr2Arr1]
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))