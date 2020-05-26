/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const stack = []
  const result = []
  let last = null
  let current = root
  while (current || stack.length > 0) {
    // 找到左下角
    while (current) {
      stack.push(current)
      current = current.left
    }
    // 先取栈中的最后一项
    current = stack[stack.length - 1]
    // 判断当前项是否有右节点，或者它的右节点是否被访问过，被访问过了，那么就应该当前节点出栈
    if (!current.right || current.right === last) {
      // 没有右节点，那么就把当前项出栈
      current = stack.pop()
      result.push(current.val)
      // 并把当前项标记为已访问
      last = current
      current = null
    } else {
      // 有右节点，那么接着下次循环的时候，就会把这个右节点压入栈顶
      current = current.right
    }
  }
  return result
}
