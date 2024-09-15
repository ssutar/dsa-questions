/**
 * Suppose you are at a party with n people labeled from 0 to n - 1 and among them, there may exist one  celebrity. The definition of a celebrity is that all the other n - 1 people know the celebrity, but the celebrity does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. You are only allowed to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

Input: graph = [[1,1,0],[0,1,0],[1,1,1]]
Output: 1
Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.

Input: graph = [[1,0,1],[1,1,0],[0,1,1]]
Output: -1
Explanation: There is no celebrity.
 */

function findTheCelebrity(graph) {
  const ROWS = graph.length;
  const COLS = graph[0].length;

  const indegree = Array(ROWS).fill(0);
  const outdegree = Array(COLS).fill(0);

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (graph[i][j] === 1) {
        outdegree[i] += 1;
        indegree[j] += 1;
      }
    }
  }

  for (let i = 0; i < ROWS; i++) {
    if (indegree[i] === ROWS && outdegree[i] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(
  findTheCelebrity([
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ])
);
console.log(
  findTheCelebrity([
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
