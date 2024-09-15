/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 
 */

// Time complexity: O(4^n)
// Spce complexity - O(n)

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitsToLetters = {
    0: '',
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function combine(digits) {
    if (!digits.length) {
      return [];
    }

    if (digits.length === 1) {
      return digitsToLetters[digits].split('');
    }

    const current = digits[0];
    const remaining = combine(digits.slice(1));
    const result = [];

    digitsToLetters[current]?.split('').forEach((currentChar) => {
      remaining.forEach((remainingChars) =>
        result.push(currentChar + remainingChars)
      );
    });
    return result;
  }

  return combine(digits);
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
