/**
 * Variation of coin change.
we are given dp array that we created while finding number of ways to make the target sum. We need to find the coins array, using which this dp array is created.
Example:

target = 10
number of ways to make 10: 3
Input: [1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 3]
Output: [2, 5, 6]


 */

function reverseCoinChange(dp) {
  const result = [];
  const n = dp.length;
  for (let i = 1; i < n; i++) {
    if (dp[i] === 1) {
      for (let j = n - 1; j >= i; j--) {
        dp[j] = dp[j] - dp[j - i];
      }
      result.push(i);
    }
  }
  return result;
}

console.log(reverseCoinChange([1, 0, 1, 0, 1, 1, 2, 1, 2, 1, 3]));
