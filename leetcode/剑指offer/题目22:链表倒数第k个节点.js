/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 解法：非常简单，快慢指针即可解决，让快指针先走`k`步，这样到快指针为`null`的时候，即快指针已经走到了链表结尾的下一位，这时慢指针正好是倒数第`k`个节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function (head, k) {
  let first = head
  let last = head
  while (k > 0) {
    first = first.next
    k--
  }
  while (first) {
    first = first.next
    last = last.next
  }
  return last
}
