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
 * 解法：利用快慢指针
 * - 快指针一次走两步，慢指针一次走一步，如果链表存在环，那么就一定会存在相遇的点
 * - 当两者相遇的时候，我们让快指针回到原点，然后快慢指针都是走一步，那么当它们相遇的时候，这里就是链表的环的入口
 * - 可以通过画图来辅助理解
 *
 * - 假设从`head`开始到入环节点的距离为`n`,从入环节点到相遇节点的距离为`s`，从相遇节点在走回入环节点的距离为`l`
 * - 因为快指针走的快，所以当快慢指针相遇的时候，快指针走的距离为`n+s+l+s`，慢指针走的距离为`n+s`
 * - 又因为快指针一次走两步，也就是说，快指针走的距离一直为慢指针的两倍，所以说可以得到`n+s+l+s = 2(n+s)`，最终得出`n=l`
 * - 此时也就是说，快指针回到`head`，然后一次走一步，和慢指针同步进行，这样走完`n`的距离的时候，两者正好相遇，也就是入环节点
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
  return null
}
