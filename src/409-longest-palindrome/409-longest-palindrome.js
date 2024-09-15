/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 


 */

var longestPalindrome = function (str) {
  const map = new Map();
  let longest = 0;
  for (let ch of str) {
    if (map.has(ch)) {
      longest += 2;
      map.delete(ch);
    } else {
      map.set(ch, true);
    }
  }
  return map.size === 0 ? longest : longest + 1;
};
