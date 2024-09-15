/**
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

// Time complexity: O(n)
// Space complexity: O(n * interval tuple size)

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insertIntervals = function (intervals, newInterval) {
  const left = [];
  const right = [];
  let [newStart, newEnd] = newInterval;

  for (let [start, end] of intervals) {
    if (end < newStart) {
      left.push([start, end]);
    } else if (start > newEnd) {
      right.push([start, end]);
    } else {
      newStart = Math.min(newStart, start);
      newEnd = Math.max(newEnd, end);
    }
  }
  return [...left, [newStart, newEnd], ...right];
};

console.log(
  insertIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);

console.log(
  insertIntervals(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
