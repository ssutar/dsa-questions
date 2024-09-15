/**
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

 */

// time complexity: O(m*n)
// space complexity: O(m*n)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // const visited = new Map();
  const dp = Array.from({ length: m + 1 }).map(() =>
    Array.from({ length: n + 1 }).map(() => 0)
  );

  function traverse(i, j) {
    if (i < 0 || j < 0) {
      return;
    }
    if (i === m - 1 && j === n - 1) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
    // visited.set(`${i}_${j}`, true);
    traverse(i - 1, j);
    traverse(i, j - 1);
  }
  traverse(m - 1, n - 1);
  console.log(dp);
};

uniquePaths(3, 7);
