/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const stack = []
  const result = []
  let current = root
  while (current || stack.length > 0) {
    // 根节点入栈，然后左节点入栈，直到叶子节点
    while (current) {
      stack.push(current)
      current = current.left
    }
    // 然后开始出栈，最先出栈的是左下角的叶子节点，然后是该节点出栈，然后是右节点出栈
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }
  return result
}
