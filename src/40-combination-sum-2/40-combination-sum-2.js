/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 

Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

 */

// time complexity O(2^n)
// space complexity - result O(k*x) k-> number of combinations and x -> max length of combinantion Additionally O(n) for recursive call stack

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  function combine(sum, nums, path) {
    if (sum < 0) {
      return;
    }
    if (sum === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      combine(sum - nums[i], nums.slice(i + 1), [...path, nums[i]]);
    }
  }
  candidates.sort((a, b) => a - b);
  combine(target, candidates, []);
  return result;
};

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
