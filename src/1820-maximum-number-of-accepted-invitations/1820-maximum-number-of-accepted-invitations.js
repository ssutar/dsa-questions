/**
 * 
 * LeetCode 1820. Maximum Number of Accepted Invitations

There are m boys and n girls in a class attending an upcoming party.

You are given an m x n integer matrix grid, where grid[i][j] equals 0 or 1. If grid[i][j] == 1, then that means the ith boy can invite the jth girl to the party. A boy can invite at most one girl, and a girl can accept at most one invitation from a boy.

Return the maximum possible number of accepted invitations.
 */

function maxAcceptedInvitations(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const invitations = [];
  function invite(r, visited = new Map()) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0 || visited.has(c)) {
        continue;
      }
      visited.set(c, true);
      if (invitations[c] === undefined || invite(invitations[c], visited)) {
        invitations[c] = r;
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < ROWS; i++) {
    invite(i);
  }

  return invitations;
}

console.log(
  maxAcceptedInvitations([
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ])
);

console.log(
  maxAcceptedInvitations([
    [1, 0, 1, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
  ])
);
