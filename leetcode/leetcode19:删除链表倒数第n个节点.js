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
 * 解法一：**利用一个栈，将链表中的每一个节点都保存下来**
 * > 这个解法可以实现一次遍历就能完成操作
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const stack = []
  while (head) {
    stack.push(head)
    head = head.next
  }
  // 要删除项在栈中的位置(索引)
  const cur = stack.length - n
  // 如果前一项存在
  if (stack[cur - 1]) {
    const prev = stack[cur - 1]
    // 判断后一项是否存在
    if (stack[cur + 1]) {
      prev.next = stack[cur + 1]
    } else {
      prev.next = null
    }
  } else {
    // 如果前一项不存在，那么说明就是删除的第一项
    if (stack[cur + 1]) {
      // 如果删除的第一项后边还有其他项，那么直接把栈底的元素删除掉
      stack.shift()
    } else {
      stack[0] = null
    }
  }
  return stack[0]
}

/**
 * 解法二：**快慢指针**
 * - 创建一个快指针和慢指针，快指针先比慢指针走`n`步
 * - 然后两个指针同步进行，当快指针指向链表中的最后一个节点时，也就是`fast.next === null`的时候，这时的慢指针正好指向了要删除的节点的前一位
 * - 此时我们直接修改慢指针`next`的指向为`next.next`即删除了倒数第`n`个节点
 * - 为了避免出现倒数第`n`项正好是第一个链表的情况，我们在链表前边加了一个辅助用的节点`0`，并让它的`next`指向`head`即可，最终返回的时候返回它的`next`
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var _removeNthFromEnd = function (head, n) {
  const preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead
  let slow = preHead
  // 快指针先走 n 步
  n = n + 1
  while (n--) {
    fast = fast.next
    console.log(fast)
  }
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
}
