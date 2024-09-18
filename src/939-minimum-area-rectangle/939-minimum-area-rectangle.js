/**
 * You are given an array of points in the X-Y plane points where points[i] = [xi, yi].

Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0.

 

Example 1:


Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:


Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
 

Constraints:

1 <= points.length <= 500
points[i].length == 2
0 <= xi, yi <= 4 * 104
All the given points are unique.
 */

// NOTE - use diagonals to check a rectangle can be formed or not
// If opposite co-ordinates exists then its a diagonal match

/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  const map = new Map();

  for (let [x, y] of points) {
    if (!map.has(x)) {
      map.set(x, new Set());
    }
    map.get(x).add(y);
  }

  let minArea = Number.POSITIVE_INFINITY;

  for (let [x1, y1] of points) {
    for (let [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) {
        continue;
      }
      if (map.get(x1).has(y2) && map.get(x2).has(y1)) {
        minArea = Math.min(minArea, Math.abs(x2 - x1) * Math.abs(y2 - y1));
      }
    }
  }

  return minArea === Number.POSITIVE_INFINITY ? 0 : minArea;
};
