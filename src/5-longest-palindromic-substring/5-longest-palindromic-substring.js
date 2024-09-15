/**
 * Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

// Time complexity - O(n^2)

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = '';

  function palindrome(left, right) {
    let i = 0;
    while (s[left - i] && s[left - i] === s[right + i]) {
      i++;
    }
    i--;
    return s.slice(left - i, right + i + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const odd = palindrome(i, i);
    const even = palindrome(i, i + 1);
    const current = odd.length > even.length ? odd : even;
    longest = current.length > longest.length ? current : longest;
  }

  return longest;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
