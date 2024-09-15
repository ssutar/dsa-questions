/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numberOfIslands = (grid) => {
  const visited = new Map();

  const ROWS = grid.length;
  const COLS = grid[0].length;

  let numIslands = 0;
  const deltas = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function traverse(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      visited.has(`${row}_${col}`) ||
      grid[row][col] === '0'
    ) {
      return;
    }

    visited.set(`${row}_${col}`, true);

    for (let [dx, dy] of deltas) {
      traverse(row + dx, col + dy);
    }
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i}_${j}`)) {
        numIslands++;
        traverse(i, j);
      }
    }
  }

  return numIslands;
};

console.log(
  numberOfIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
