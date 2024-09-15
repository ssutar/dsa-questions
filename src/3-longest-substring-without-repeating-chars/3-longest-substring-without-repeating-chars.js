/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

// Time complexity - O(N)
// Space complexity - O(N)

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const map = new Map();
//   let maxLength = 0;
//   let left = 0;
//   let right = 0;
//   while (right < s.length) {
//     const ch = s.charAt(right);
//     right++;
//     if (map.has(ch)) {
//       left = map.get(ch);
//       map.delete(ch);
//     } else {
//       map.set(ch, right);
//       maxLength = Math.max(maxLength, right - left - 1);
//     }
//   }
//   return maxLength;
// };

function lengthOfLongestSubstring(s) {
  let chars = [];
  let longest = 0;

  for (let ch of s) {
    if (chars.includes(ch)) {
      while (chars.includes(ch)) {
        chars.shift();
      }
    }
    chars.push(ch);
    longest = Math.max(longest, chars.length);
  }
  return longest;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
