/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 解法一：利用栈结构
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  const stack = []
  while (head) {
    stack.push(head)
    head = head.next
  }
  return stack[Math.floor(stack.length / 2)]
}

/**
 * 解法二：利用快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
const _middleNode = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
