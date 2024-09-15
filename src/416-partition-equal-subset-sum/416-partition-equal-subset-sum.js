/**
 * Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const map = new Map();
  const sum = nums.reduce((s, n) => s + n, 0);
  if (sum % 2 === 1) {
    return false;
  }

  function partition(target, index) {
    if (target === 0) {
      return true;
    }

    if (target < 0 || index > nums.length) {
      return false;
    }

    const key = `${target}_${index}`;
    if (map.has(key)) {
      return map.get(key);
    }

    const result =
      partition(target - nums[index], index + 1) ||
      partition(target - nums[index], index);
    map.set(key, result);
    return result;
  }

  return partition(sum / 2, 0);
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));

// Time O(n*sum)
// Space O(n*sum)
