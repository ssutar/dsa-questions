/**
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = [["0"]]
Output: 0
Example 3:

Input: matrix = [["1"]]
Output: 1
 

Constraints:

rows == matrix.length
cols == matrix[i].length
1 <= row, cols <= 200
matrix[i][j] is '0' or '1'. */

var largestRectangleArea = function (heights) {
  const histogram = heights;
  const stack = [];

  let maxRectArea = 0;

  for (let i = 0; i < histogram.length; i++) {
    let curHeight = histogram[i];
    let stackHeight;
    let stackIndex = i;
    while (stack.length && stack[stack.length - 1][0] > curHeight) {
      [stackHeight, stackIndex] = stack.pop();

      const area = stackHeight * (i - stackIndex);
      maxRectArea = Math.max(maxRectArea, area);
    }
    stack.push([curHeight, stackIndex]);
  }

  while (stack.length) {
    let [stackHeight, stackIndex] = stack.pop();
    let area = stackHeight * (histogram.length - stackIndex);
    maxRectArea = Math.max(maxRectArea, area);
  }
  return maxRectArea;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const ROWS = matrix.length;
  const COLS = matrix[0].length;
  // const mat = Array.from({ length: ROWS }).map((_, i) =>
  //   Array.from({ lemgth: COLS }).map((_, j) => parseInt(matrix[i][j], 10))
  // );

  // console.log(mat);
  const histogram = [matrix[0].map((n) => parseInt(n, 10))];

  for (let i = 1; i < ROWS; i++) {
    histogram[i] = [];
    for (let j = 0; j < COLS; j++) {
      histogram[i][j] =
        parseInt(matrix[i][j], 10) === 0
          ? 0
          : parseInt(histogram[i - 1][j], 10) + parseInt(matrix[i][j], 10);
    }
  }

  console.log(histogram);
  let maxArea = 0;
  for (let i = 0; i < ROWS; i++) {
    maxArea = Math.max(maxArea, largestRectangleArea(histogram[i]));
  }

  return maxArea;
};

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);
