/**
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || !matrix.length) {
    return 0;
  }

  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  let dp = new Array(ROWS + 1).fill(0).map(() => new Array(COLS + 1).fill(0));
  let max = 0;
  for (let r = 1; r < ROWS + 1; r++) {
    for (let c = 1; c < COLS + 1; c++) {
      if (matrix[r - 1][c - 1] !== '0') {
        dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]) + 1;
        max = Math.max(dp[r][c], max);
      }
    }
  }
  return max ** 2;
};

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);
