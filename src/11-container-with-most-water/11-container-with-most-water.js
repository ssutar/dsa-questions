/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

var maxArea = function (heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMaxHeight = 0;
  let rightMaxHeight = 0;
  let leftMaxIndex = -1;
  let rightMaxIndex = -1;
  let maxArea = 0;

  while (left < right) {
    let lh = heights[left];
    let rh = heights[right];

    if (lh > leftMaxHeight) {
      leftMaxHeight = lh;
      leftMaxIndex = left;
    }

    if (rh > rightMaxHeight) {
      rightMaxHeight = rh;
      rightMaxIndex = right;
    }

    const currentArea =
      Math.min(leftMaxHeight, rightMaxHeight) * (rightMaxIndex - leftMaxIndex);
    maxArea = Math.max(currentArea, maxArea);
    if (leftMaxHeight > rightMaxHeight) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
