/**
 * Input :
2 3 4
List of all operators including "(" and ")".
Target = 20

Output = ( 2 + 3 ) * 4
Return list of all such expressions which evaluate to target.

I prososed to do it via Backtracking but he said try if you can do it via trees.
Finally, wrote code using backtracking but it wasn't completely done.

Let me know your solution using trees/backtracking.

Same as : https://leetcode.com/problems/expression-add-operators/
 */

function expressionAddOperators(list, target) {
  class Node {
    constructor(value, sum) {
      this.value = value;
      this.sum = sum;
      this.children = {};
    }
  }

  function buildTree(nums, parent) {
    if (!nums.length) {
      return;
    }
    const num = nums[0];

    parent.children['+'] = new Node(num, parent.sum + num);
    buildTree(nums.slice(1), parent.children['+']);
    parent.children['-'] = new Node(num, parent.sum - num);
    buildTree(nums.slice(1), parent.children['-']);
    parent.children['*'] = new Node(num, parent.sum * num);
    buildTree(nums.slice(1), parent.children['*']);
    parent.children['/'] = new Node(num, parent.sum / num);
    buildTree(nums.slice(1), parent.children['/']);
  }
  const result = [];
  function traverse(node, path, total) {
    if (!node) {
      return;
    }
    if (node.sum === total) {
      result.push(path);
      return;
    }

    for (let [op, n] of Object.entries(node.children)) {
      traverse(n, path + op + n.value, total);
    }
  }

  const root = new Node(list[0], list[0]);
  buildTree(list.slice(1), root);
  traverse(root, `${root.value}`, target);
  return result;
}

console.log(expressionAddOperators([1, 2, 3], 6));
