// https://leetcode.com/discuss/interview-question/5063427/google-onsite-round-2
/**
 You are given a 3D lattice graph where each node is either:

Torch Node: Contains power 16.
Wire Node: Initially has power 0.
Power is transmitted from Torch Nodes to adjacent Wire Nodes with the following rules:

When a Torch Node transmits power to a Wire Node, the Wire Node’s power becomes 15.
Each subsequent Wire Node connected to a powered Wire Node receives power that is decremented by 1 for each transmission.
The power transmission continues until the power value reaches 0 or a Torch Node is encountered.
Your task is to return the final state of the graph after all power has been transmitted from all Torch Nodes.

Input
A 3D array representing the lattice graph.
Each element is either a 16 (Torch Node) or 0 (Wire Node).
Output
The 3D array representing the final state of the graph after power transmission.

Example:
[
[[16, 0, 16],
[ 0, 0, 0],
[16, 0, 16]]
]

Output:
[
[[16, 15, 16],
[15, 14, 15],
[16, 15, 16]]
]
 */

function torchWire(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const que = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 16) {
        que.push([r, c]);
      }
    }
  }
  console.log(que);
  while (que.length) {
    const [r, c] = que.pop();
    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let [dr, dc] of dirs) {
      const newR = r + dr;
      const newC = c + dc;
      if (
        newR < 0 ||
        newC < 0 ||
        newR >= ROWS ||
        newC >= COLS ||
        grid[newR][newC] >= grid[r][c] - 1
      ) {
        continue;
      }
      grid[newR][newC] = grid[r][c] - 1;
      que.push([newR, newC]);
    }
  }
  return grid;
}

console.log(
  torchWire([
    [16, 0, 16],
    [0, 0, 0],
    [16, 0, 16],
  ])
);
