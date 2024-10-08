/**
 * Given n lakes numbered from 1 to n and given m days of the weather report.
There is a dragon that can drain a lake but this dragon cannot appear on a rainy day.
You will be given an array weather of size m (0 <= weather[i] <= n) where weather[i] is the ID of the lake where it will rain in the ith day, or weather[i] = 0 which indicates a sunny day (dragon can appear).
Initially, all lakes are empty. When it rains in someday over some lake, this lake becomes full of water. If it rained twice over the same lake, there will be a flood in this lake. If someday it didn't rain (i.e. weather[i] = 0) the dragon will appear and you can ask the dragon to empty one lake (dragon will do nothing if the lake already empty).

You should find for each time a dragon apears, the lake it will be assigned to, in order to avoid floods.
If it is impossible to avoid floods return any default value.


Input: 3, 4, [1,0,2,0]
Output: [1,2]
Explanation: After the first day, lake 1 is full of water.
The second day a dragon will appear you can assign him to any lake now.
The third day it rains over lake 2 and it's now full of water.
The fourth day the dragon appears and you can assign him to any lake.
In this example there will be no flood and you can assign the dragon each time to any lake.
([1,1], [1,2], [1,3], [2,1], [2,2] and [2,3] are all valid answers).
Input: 3, 4, [1,1,0,0]
Output: cannot stop flood
Explanation: After the first day, lake 1 is full of water. The second day it will rain again over lake 1 and it will flood. 
Seems there is no way to avoid flood and in this case interviewer asked me to define a default value and return it.
Since the IDs of the lake take value from 1 to n I chose to return (n + 1)
Return value in my code was [4,4]
Input: 3, 7, [1,2,0,2,3,0,1]
Output: [2,1] (only valid answer)
Explanation: The first time the dragon appears, it must drain lake 2 so that next time it will not flood.
The second time the dragon appears, it must drain lake 1 because it will rain over lake 1 and lake 1 is already full.
n, m <= 100000
 */

function canAvoidFlood(n, m, weather) {
  let sunnyDays = 0;
  const filled = new Set();
  const result = [];
  for (let i = 0; i < m; i++) {
    const lake = weather[i];
    if (lake === 0) {
      sunnyDays++;
    } else {
      if (filled.has(lake)) {
        if (sunnyDays <= 0) {
          return [];
        }
        sunnyDays--;
        result.push(lake);
        filled.delete(lake);
      } else {
        filled.add(lake);
      }
    }
  }

  if (sunnyDays > 0) {
    for (let lake of filled) {
      if (sunnyDays === 0) {
        break;
      }
      result.push(lake);
      sunnyDays--;
    }
  }

  return result;
}

console.log(canAvoidFlood(3, 4, [1, 0, 2, 0]));
console.log(canAvoidFlood(3, 4, [1, 1, 0, 0]));
console.log(canAvoidFlood(3, 7, [1, 2, 0, 2, 3, 0, 1]));
