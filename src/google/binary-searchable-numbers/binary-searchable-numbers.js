/**
 * Java O(n) solution.
Binary Searchable Number has no elements on left bigger than it, an no elements on right smaller than it on.
So use a List list to record the valid items, and use max to record max value so far.
If a[i] >= max, which means, it is larger than all the elements on its left, add it to the list, and update the max.
else {remove the element in the list that bigger than a[i];
}
return list.size();

For instance, 2,4, 5,4, 6, 2, 8

add 2 to list, and max -> 2, list: 2
add 4 to list, max-> 4, list: 2, 4
add 5 to list, max - > 5, list: 2, 4, 5
4 <= max, so remove the element's items in the list larger than 4 list: 2,4
6 > max, max -> 6, list: 2,4,6
2 < max, so remove the element's items in the list larger than 4 list: 2
7 8 > max, max-> 8, list: 2,8
the output is 2, and Binary Searchable Number is 2 and 8
 */

function binarySearchable(nums) {
  // let result = [];
  // for (let num of nums) {
  //   // if (result.length === 0) {
  //   //   result.push(num);
  //   // }
  //   if (result.length && result[result.length - 1] >= num) {
  //     result = [];
  //   }
  //   result.push(num);
  // }
  // return result;

  const maxLeft = [];
  let result = 0;
  maxLeft[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], nums[i]);
  }

  let minRight = Number.MAX_VALUE;
  for (let i = nums.length - 1; i >= 0; i--) {
    minRight = Math.min(minRight, nums[i]);
    if (nums[i] <= minRight && nums[i] >= maxLeft[i]) {
      result++;
    }
  }

  return result;
}

console.log(binarySearchable([2, 4, 5, 4, 6, 2, 8]));
console.log(binarySearchable([1, 3, 2]));
console.log(binarySearchable([2, 1, 3, 5, 4, 6]));
console.log(binarySearchable([1, 5, 7, 11, 12, 18]));
console.log(binarySearchable([5, 4, 6, 2, 8]));
console.log(binarySearchable([1, 3, 2, 4, 5, 7, 6, 8]));
