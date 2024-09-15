/**
 * In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
 

Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.
Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function traverse(row, col, visited) {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      grid[row][col] === 0 ||
      visited.has(`${row}_${col}`)
    ) {
      return 0;
    }

    let currentMaxGold = grid[row][col];
    visited.set(`${row}_${col}`, true);
    for (let [dr, dc] of dirs) {
      currentMaxGold = Math.max(
        currentMaxGold,
        grid[row][col] + traverse(row + dr, col + dc, visited)
      );
    }
    visited.delete(`${row}_${col}`);
    return currentMaxGold;
  }

  let maxGold = 0;
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const cellValue = grid[i][j];
      if (cellValue !== 0) {
        maxGold = Math.max(maxGold, traverse(i, j, new Map()));
      }
    }
  }
  return maxGold;
};

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
);
