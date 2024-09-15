/**
 * You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

​Return the minimum number of intervals required to complete all tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

Example 2:

Input: tasks = ["A","C","A","B","D","B"], n = 1

Output: 6

Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:

Input: tasks = ["A","A","A", "B","B","B"], n = 3

Output: 10

Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = new Map();
  let highestFreq = 0;
  let highestFreqTask;

  for (let t of tasks) {
    map.set(t, (map.get(t) || 0) + 1);

    if (map.get(t) > highestFreq) {
      highestFreq = map.get(t);
      highestFreqTask = t;
    }
  }

  let maxIdle = (highestFreq - 1) * n;

  map.forEach((value, key) => {
    if (key === highestFreqTask) {
      return;
    }
    if (value === highestFreq) {
      maxIdle -= value - 1;
    } else {
      maxIdle -= value;
    }
  });

  return maxIdle > 0 ? tasks.length + maxIdle : tasks.length;
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2));
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3));
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1));
