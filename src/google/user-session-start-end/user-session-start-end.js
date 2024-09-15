/**
 * You are given a list of user sessions where each user session has start and end times both inclusive. Now, given a value N, find the count of all users at each point in time from [0,N) i.e include 0 but exclude N. Example:
Input:
[(0,3), (1,4) ] N=7
Output:
0->1
1->2
2->2
3->2
4->1


 */

function userSessionStartEnd(sessions, n) {
  const map = new Map();
  for (let [start, end] of sessions) {
    if (!map.has(start)) {
      map.set(start, []);
    }
    map.get(start).push(end);
  }
  const result = {};
  let prev = [];
  for (let i = 0; i < n; i++) {
    prev = [...prev, ...(map.get(i) || [])];
    result[i] = prev.length;
    prev = prev.filter((p) => p != i);
  }
  return result;
}

console.log(
  userSessionStartEnd(
    [
      [0, 3],
      [1, 4],
    ],
    7
  )
);
