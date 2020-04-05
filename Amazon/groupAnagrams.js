/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Given an array of strings, group anagrams together.
var groupAnagrams = function (strs) {
    let result = new Map()

    for (const val of strs) {
        let sorted = [...val].sort((a, b) => a.localeCompare(b)).toString()

        if(result.has(sorted))
        {
            result.set(sorted, [...result.get(sorted), val])
        } else {
            result.set(sorted, [val])
        }
    }

    return [...result.values()]
};

var result = groupAnagrams(["eat","tea","tan","ate","nat","bat"])

console.log(result.toLocaleString())