/**
 * You are given a string s containing only the characters '(', ')', '{', '}', '[' and ']'. Your task is to determine if the input string is valid according to the following rules:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Additionally, this problem introduces a new rule:
3. Each open bracket must be paired with a corresponding closing bracket in a unique way. That is, for each open bracket, there should not be multiple options for the corresponding closing bracket.

Write a function isValidUnique(s) that returns true if s is valid and false otherwise.

Example 1:

vbnet
Copy code
Input: s = "{[()()]}"
Output: true
Explanation: The string is valid according to the given rules.
Example 2:

vbnet
Copy code
Input: s = "[(])"
Output: false
Explanation: The string is not valid because the brackets are not closed in the correct order.
Example 3:

vbnet
Copy code
Input: s = "{[(])}"
Output: false
Explanation: The string is not valid because there are multiple options for closing brackets for the first '{' and '[' characters.
Feel free to comment on how you would approa****ch solving this problem considering the uniqueness constraint for pairing open and closing brackets!
 */

function matchingBrackets(s) {
  const brackets = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const stack = [];
  for (let ch of s) {
    if (brackets[ch]) {
      if (stack.pop() !== brackets[ch]) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
}

console.log(matchingBrackets('{[()()]}'));
console.log(matchingBrackets('[(])'));
console.log(matchingBrackets('{[(])}'));
