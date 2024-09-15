/**
 * Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const num1 = a.split('').reverse();
  const num2 = b.split('').reverse();
  const sum = [];
  const maxLength = Math.max(num1.length, num2.length);
  let carry = 0;
  for (let i = 0; i < maxLength; i++) {
    let result =
      carry + parseInt(num1[i] || 0, 10) + parseInt(num2[i] || 0, 10);
    carry = Math.floor(result / 2);
    sum.push(result % 2);
  }
  carry && sum.push(carry);
  return sum.reverse().join('');
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
