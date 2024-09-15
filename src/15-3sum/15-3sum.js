/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time complexity - O(n^2)
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push(nums[i], nums[left], nums[right]);
        const currentLeft = nums[left];
        const lastRight = nums[right];
        while (left < right && currentLeft === nums[left]) {
          left++;
        }
        while (left < right && lastRight === nums[right]) {
          right--;
        }
      }
    }
  }
  return result;
};
