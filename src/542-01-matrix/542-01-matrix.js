/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 


 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const ROWS = mat.length;
  const COLS = mat[0].length;

  const result = Array.from({ length: ROWS }).map(() =>
    Array.from({ length: COLS }).map(() => Number.MAX_SAFE_INTEGER)
  );

  const que = [];
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = ROWS - 1; i > -0; i--) {
    for (let j = COLS - 1; j >= 0; j--) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        que.push([i, j]);
      }
    }
  }

  while (que.length) {
    const [row, col] = que.shift();

    for (let [dr, dc] of directions) {
      const newR = row + dr;
      const newC = col + dc;

      if (
        newR >= 0 &&
        newC >= 0 &&
        newR < ROWS &&
        newC < COLS &&
        result[newR][newC] > 1 + result[row][col]
      ) {
        result[newR][newC] = 1 + result[row][col];
        que.push([newR, newC]);
      }
    }
  }

  return result;
};
