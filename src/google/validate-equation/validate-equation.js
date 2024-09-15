/**
 * https://leetcode.com/discuss/interview-question/5031821/Google-or-Phone-or-Senior-Software-Engineer
 * 
 * Validate if the equation is syntactically correct.

Valid operators: +, -, a-z, (, )
Test cases:
Valid - a + x = b + (c + a)
Invalid - a + x = (ending with =; doesn't have RHS)
Invalid - a + -x = a + b (- in -x is a unary operator)


 */

function validateEquation(equation) {
  const [lhs, rhs] = equation.split('=');

  if (!lhs?.length || !rhs?.length) {
    return false;
  }
  if (
    lhs.trim().slice(-1) === '+' ||
    lhs.trim().slice(-1) === '-' ||
    rhs.trim().slice(-1) === '+' ||
    rhs.trim().slice(-1) === '-'
  ) {
    return false;
  }

  function validate(side) {
    const stack = [];
    for (let ch of side) {
      if (ch === ' ') {
        continue;
      }

      if (ch === '(') {
        stack.push('(');
      }

      if (ch === ')') {
        if (!stack.length || stack[stack.length - 1] !== '(') {
          return false;
        }
        stack.pop();
      }
    }
    return !stack.length;
  }

  return validate(lhs.trim()) && validate(rhs.trim());
}

console.log(validateEquation('a + x = b + (c + a)'));
console.log(validateEquation('a + x = b + ((c + a)'));
// console.log(validateEquation('a + x ='));
console.log(validateEquation('a + (-x) = a + b - '));
