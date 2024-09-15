/**
 * You are given a 
𝑚
×
𝑛
m×n 2D grid initialized with these three possible values:

-1 - A water cell that can not be traversed.
0 - A treasure chest.
INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.

Assume the grid can only be traversed up, down, left, or right.

Example 1:

Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]
Example 2:

Input: [
  [0,-1],
  [2147483647,2147483647]
]

Output: [
  [0,-1],
  [1,2]
]
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] is one of {-1, 0, 2147483647}
 */

function islandsAndTreasure(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  let que = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === 0) {
        que.push([i, j]);
      }
    }
  }

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  while (que.length) {
    const [row, col] = que.pop();

    for (let [dr, dc] of dirs) {
      const newR = row + dr;
      const newC = col + dc;
      if (
        newR >= ROWS ||
        newC >= COLS ||
        newR < 0 ||
        newC < 0 ||
        grid[newR][newC] === -1 ||
        grid[newR][newC] === 0
      ) {
        continue;
      }
      if (grid[newR][newC] > 1 + grid[row][col]) {
        grid[newR][newC] = Math.min(grid[newR][newC], 1 + grid[row][col]);
        que.push([newR, newC]);
      }
    }
  }
  return grid;
}
console.log(
  islandsAndTreasure([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647],
  ])
);
