/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归法很简单，这里使用迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const list = []
  const stack = []

  // 首先入栈的是root节点
  if (root) stack.push(root)
  while (stack.length > 0) {
    const curNode = stack.pop()
    // 首先访问的是根节点
    list.push(curNode.val)

    // 我们要先打印左子树，再打印右子树
    // 所以我们先入栈的顺序就是先右子树，再左子树(先入后出)
    if (curNode.right !== null) {
      stack.push(curNode.right)
    }
    if (curNode.left !== null) {
      stack.push(curNode.left)
    }
  }
  return list
}
