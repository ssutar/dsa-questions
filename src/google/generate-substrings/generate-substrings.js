/**
 * https://leetcode.com/discuss/interview-question/4947264/Google-or-Phone-or-Generate-Substrings-and-Append-Characters
 * 
 * Split a String Into the Max Number of Unique Substrings
 * 
 * Given a string, your task is to generate a list of substrings such that while appending all of the substrings in the list should give back the original string. If the resulting substring is not already present in the list, it should be added to the list.

Examples:

Input: "GOOOOOOGLE"
Output: ["G", "O", "OO", "OOO", "GL", "E"]

Input: "GOOOOOOGLEG"
Output: ["G", "O", "OO", "OOO", "GL", "E", "G"]
handling edge case



 */

function maxUniqueSplit(str) {
  const result = [];
  let subStr = '';
  for (let ch of str) {
    subStr += ch;

    if (!result.includes(subStr)) {
      result.push(subStr);
      subStr = '';
    }
  }

  if (subStr) {
    while (result.includes(subStr)) {
      subStr = result.pop() + subStr;
    }
    result.push(subStr);
  }

  return result;
}

console.log(maxUniqueSplit('GOOOOOOGLE'));
console.log(maxUniqueSplit('GOOOOOOGLEGOO'));
