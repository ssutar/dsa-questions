/**
 * Given an array of integers, find a subarray with maximum sum?

Solved using Kadane's Algorithm

Follow up:
Given an array of integers nums, find indexes [i, j] such that the subarray sum nums[i] + nums[i+1] ... nums[j-1] + nums[j] is maximum and nums[i] is equal to nums[j]

Example:

nums = [1, 3, 5, 6, 3, -6, 3]

Answer: [1, 4]
 */

function maxSubarrayWithEqualEnds(nums) {
  let maxSum = Number.MIN_VALUE;
  let start = -1;
  let end = -1;
  let cumulativeSum = 0;
  let prefixArr = [];

  let lastOccurence = new Map();

  prefixArr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixArr[i] = prefixArr[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    cumulativeSum += nums[i];

    if (lastOccurence.has(nums[i])) {
      let subarraySum = cumulativeSum - prefixArr[lastOccurence.get(nums[i])];
      // console.log(
      //   cumulativeSum,
      //   prefixArr[lastOccurence.get(nums[i])],
      //   subarraySum
      // );
      subarraySum += nums[i];

      if (subarraySum <= 0) {
        lastOccurence.set(nums[i], i);
      }

      if (subarraySum >= maxSum) {
        maxSum = subarraySum;
        start = lastOccurence.get(nums[i]);
        end = i;
      }
    } else {
      lastOccurence.set(nums[i], i);
    }
  }

  return [start, end];
}

console.log(maxSubarrayWithEqualEnds([1, 3, 5, 6, 3, -6, 3]));
