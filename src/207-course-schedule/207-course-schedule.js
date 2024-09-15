/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 


 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// var canFinish = function (numCourses, prerequisites) {
//   const req = Array.from({ length: numCourses }).map(() => []);

//   for (let [course, dependency] of prerequisites) {
//     req[course].push(dependency);
//   }

//   function hasCycle(course, deps) {
//     if (deps.includes(course)) {
//       return true;
//     }
//     const courseDeps = req[course] || [];
//     for (let c of courseDeps) {
//       if (hasCycle(c, deps.concat(course))) {
//         return true;
//       }
//     }
//     return false;
//   }

//   for (let [course] of req) {
//     if (hasCycle(course, [])) {
//       return false;
//     }
//   }
//   return true;
// };

// time complexity - O(V+E) or O(V^2)
// space complexity - O(V+E)

var canFinish = function (numCourses, prerequisites) {
  const dependencies = Array.from({ length: numCourses }).map(() => []);
  const edges = Array.from({ length: numCourses }).map(() => 0);

  for (let [course, dependency] of prerequisites) {
    dependencies[dependency].push(course);
    edges[course] += 1;
  }

  let count = 0;
  let que = [];

  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === 0) {
      que.push(i);
    }
  }

  while (que.length) {
    const course = que.pop();
    count++;
    for (let dependency of dependencies[course]) {
      edges[dependency]--;
      if (edges[dependency] === 0) {
        que.push(dependency);
      }
    }
  }
  return count === numCourses;
};

console.log(
  canFinish(8, [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ])
);
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
