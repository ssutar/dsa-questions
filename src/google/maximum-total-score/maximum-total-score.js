/**
 * Given a sequence of stones with non-negative integers, calculate the maximum possible score starting from the beginning to end. You can jump any number of positions from each position. The score is calculated as the destination stone_value * number_of_jump_positions. Essentially the first value in the array doesn't matter as you always jump from beginning and only the destination stone value is considered in the score computation. You need to solve it in less than O(n^2) time.

I could come up with O(n^2) solution but couldn't solve it in less than that time complexity. Any ideas leetcoders?

For example,
Test case 1: Stones = [1, 2, 3, 4, 5], Maximum total score = 20 #you jump to ast position, so the score would be 5 * 4 = 20
Test case 2: Stones = [5, 4, 3, 2, 1], Maximum total score = 10 #you jump one position from beginning to end, so the score would be 4+3+2+1=10
Test case 3: Stones = [2, 4, 6, 8, 10], Maximum total score = 40
Test case 4: Stones = [3, 5, 2, 8, 1], Maximum total score = 25
Test case 5: Stones = [1, 1, 1, 1, 1], Maximum total score = 4
Test case 6: Stones = [5, 3, 5, 3, 5], Maximum total score = 20


 */

function maximumTotalScore(nums) {
  let result = 0;
  let maxSoFar = Number.MIN_VALUE;

  for (let i = nums.length - 1; i > 0; i--) {
    maxSoFar = Math.max(maxSoFar, nums[i]);
    result += maxSoFar;
  }

  return result;
}

function maximumTotalScore2(nums) {
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    while (stack.length && num > nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
  }
  let result = 0;
  while (stack.length) {
    const index = stack.pop();
    const prevIndex = stack.length === 0 ? 0 : stack[stack.length - 1];

    result += (index - prevIndex) * nums[index];
  }
  return result;
}

console.log(
  maximumTotalScore([1, 2, 3, 4, 5]),
  maximumTotalScore2([1, 2, 3, 4, 5])
);
console.log(
  maximumTotalScore([3, 5, 2, 8, 1]),
  maximumTotalScore2([3, 5, 2, 8, 1])
);
console.log(
  maximumTotalScore([5, 3, 5, 3, 5]),
  maximumTotalScore2([5, 3, 5, 3, 5])
);
console.log(
  maximumTotalScore([1, 2, 3, 10, 1, 2, 3, 5]),
  maximumTotalScore2([1, 2, 3, 10, 1, 2, 3, 5])
);
console.log(
  maximumTotalScore([1, 2, 3, 10]),
  maximumTotalScore2([1, 2, 3, 10])
);
