/**
 * Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // let result = [[]];
  // nums.sort((a, b) => a - b);
  // nums.forEach((num, index) => {
  //   // result.forEach((res) => res.push([...res, num]));
  //   if (index > 0 && nums[index - 1] === num) {
  //     return;
  //   }
  //   result = [...result, ...result.map((r) => [...r, num])];
  // });
  // return result;

  let result = [];

  function subsets(path, index) {
    if (index === nums.length) {
      result.push(path);
      return;
    }

    // take the current number
    subsets([...path, nums[index]], index + 1);
    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index++;
    }
    // don't take the current number
    subsets([...path], index + 1);
  }
  nums.sort();
  subsets([], 0);
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
console.log(subsetsWithDup([1, 2, 3]));
