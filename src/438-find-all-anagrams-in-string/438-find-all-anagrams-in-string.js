/**
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const map = {};
  const result = [];
  for (let ch of p) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let pLength = p.length;

  while (right < s.length) {
    const rightChar = s.charAt(right);

    if (map[rightChar] > 0) {
      pLength--;
    }

    map[rightChar]--;
    right++;

    if (pLength === 0) {
      result.push(left);
    }

    if (right - left === p.length) {
      const leftChar = s.charAt(left);
      if (map[leftChar] >= 0) {
        pLength++;
      }
      map[leftChar]++;
      left++;
    }
  }
  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
