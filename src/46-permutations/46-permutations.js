/**
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 */

// Time complexity: O(n*n!)
// Space complexity: O(n*n!)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function permutations(list) {
    if (list.length <= 1) {
      return list;
    }
    const result = [];
    for (let i = 0; i < list.length; i++) {
      const current = list[i];
      const withoutCurrent = [...list.slice(0, i), ...list.slice(i + 1)];
      // console.log(current, withoutCurrent);
      const perms = permutations(withoutCurrent);
      perms.forEach((p) => {
        result.push([current].concat(p));
      });
    }
    return result;
  }
  return permutations(nums);
};

console.log(permute([1, 2, 3]));
console.log(permute([1, 2]));
