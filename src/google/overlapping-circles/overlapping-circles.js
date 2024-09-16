/**
 * Problem: A circle is define by x-axis position, y-axis position, and a
radius. A circle group is a collection of circles that overlap. Given a
list of circles, figure out if they belong to a single circle group


 */

function getOverlappingCircleGroups(circles) {
  const visited = new Set();
  let count = 0;

  function isOverlapping([x1, y1, r1], [x2, y2, r2]) {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) <= Math.pow(r1 + r2, 2);
  }

  function traverse(index) {
    if (visited.has(index)) {
      return;
    }
    visited.add(index);
    for (let i = 0; i < circles.length; i++) {
      if (i === index) {
        continue;
      }
      if (isOverlapping(circles[index], circles[i])) {
        traverse(i);
      }
    }
  }

  for (let i = 0; i < circles.length; i++) {
    if (!visited.has(i)) {
      count++;
      traverse(i);
    }
  }

  return count;
}

console.log(
  getOverlappingCircleGroups([
    [2, 1, 3],
    [6, 1, 4],
  ])
);

console.log(
  getOverlappingCircleGroups([
    [1, 1, 5],
    [10, 10, 5],
  ])
);

console.log(
  getOverlappingCircleGroups([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
);
