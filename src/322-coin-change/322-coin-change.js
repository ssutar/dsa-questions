/**
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0

 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0;
  }
  const result = Array.from({ length: amount + 1 }).map(
    () => Number.POSITIVE_INFINITY
  );

  result[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      result[i] = Math.min(result[i - coin] + 1, result[i]);
    }
  }
  return result[amount] === Number.POSITIVE_INFINITY ? -1 : result[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2, 5], 3));
