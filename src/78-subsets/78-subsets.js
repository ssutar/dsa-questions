/**
 * Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//   const result = [];
//   function findSubsets(index, sub) {
//     if (index === nums.length) {
//       result.push(sub);
//       return;
//     }
//     findSubsets(index + 1, [...sub, nums[index]]);
//     findSubsets(index + 1, sub);
//   }

//   findSubsets(0, []);
//   return result;
// };

// console.log(subsets([1, 2, 3]));

// Time complexity: O(2^n)
// Space complexity: O(2^n)

var subsets = function (nums) {
  // let subs = [[]];
  // for (let num of nums) {
  //   // subs.forEach((sub) => subs.push([...sub, num]));
  //   subs = [...subs, ...subs.map((sub) => [...sub, num])];
  // }
  // return subs;

  // return nums.reduce(
  //   (subs, num) => [...subs, ...subs.map((sub) => [...sub, num])],
  //   [[]]
  // );

  let result = [];

  function subsets(path, index) {
    if (index === nums.length) {
      result.push(path);
      return;
    }

    // take the current number
    subsets([...path, nums[index]], index + 1);

    // don't take the current number
    subsets([...path], index + 1);
  }
  subsets([], 0);
  return result;
};

console.log(subsets([1, 2, 3]));
