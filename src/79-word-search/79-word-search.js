/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

 */

// Time complexity O(m*n*4(pow)l) - l is the length of the word
// space complexity O(l)

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;

  function traverse(row, col, word) {
    if (word.length === 0) {
      return true;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= ROWS ||
      col >= COLS ||
      board[row][col] !== word[0]
    ) {
      return false;
    }

    const dirs = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let result;
    const tmp = board[row][col];
    board[row][col] = '#';
    for (let [dr, dc] of dirs) {
      result = result || traverse(row + dr, col + dc, word.slice(1));
    }
    board[row][col] = tmp;
    return result;
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const result = traverse(i, j, word);
      if (result) {
        return result;
      }
    }
  }
  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
