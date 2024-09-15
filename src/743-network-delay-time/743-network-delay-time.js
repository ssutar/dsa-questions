/**
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const map = new Map();
  for (let [src, dst, time] of times) {
    if (!map.has(src)) {
      map.set(src, []);
    }

    map.get(src).push([dst, time]);
  }

  const que = [[k, 0]];
  let timePassed = 0;
  const visited = new Set();

  while (que.length) {
    que.sort((a, b) => a[1] - b[1]);
    const [node, time] = que.shift();
    if (visited.has(node)) {
      continue;
    }

    visited.add(node);
    timePassed = Math.max(timePassed, time);

    const neighbors = map.get(node) || [];

    for (const [neiNode, neiTime] of neighbors) {
      if (!visited.has(neiNode)) {
        que.push([neiNode, time + neiTime]);
      }
    }
  }

  if (visited.size === n) {
    return timePassed;
  }

  return -1;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);

console.log(networkDelayTime([[1, 2, 1]], 2, 1));
console.log(networkDelayTime([[1, 2, 1]], 2, 2));
