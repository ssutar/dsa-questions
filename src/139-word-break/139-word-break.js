/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 */

// time complexity: O(2^n) - without memoization, with memoization - O(n^2)
// space complexity: O(n)

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const map = new Map();
  function canBreak(start) {
    if (start === s.length) {
      return true;
    }

    if (map.has(start)) {
      return map.get(start);
    }

    for (let i = start; i < s.length; i++) {
      const curWord = s.slice(start, i + 1);
      console.log(curWord);
      if (wordDict.includes(curWord) && canBreak(i + 1)) {
        map.set(start, true);
        return true;
      }
    }
    map.set(start, false);
    return false;
  }

  return canBreak(0);
};
