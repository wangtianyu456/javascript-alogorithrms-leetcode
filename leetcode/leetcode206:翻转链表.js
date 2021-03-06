/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 解法1：迭代法
 * @param {ListNode} head
 * @return {ListNode}
 * 假设当前节点的前一项是`prev`，那么第一个节点的`prev`就是`null`，当前节点为`curr`
 * 接着用一个临时变量`next`保存`curr.next`
 * 让当前节点也就是`curr.next`指向它的前一个节点即`prev`即可
 * 之后要让指针向后移动，即`curr`指向之前保存的`next`，`prev`指向`curr`
 * 如此循环即可
 * 最终返回的时候我们要让`head`指向当前翻转后的链表的首部，即`prev`，因为`curr`每次都是指向它的`next`，当它为`null`的时候说明已经是最后一个节点了
 */
var reverseList = function (head) {
  if (!head || !head.next) return head
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev
  return head
}

/**
 * 解法2：递归法
 * @param {ListNode} head
 * @return {ListNode}
 * 我们定义一个变量`next`用来存储当前项的`next`
 * 然后去递归，当 当前项也就是`head`指向了链表中的倒数第二项时，传入到递归函数中的参数`next`的是链表中的最后一项，而最后一项的next是null，所以会`return head`，当然此时的返回的`head`就是链表中的最后一项
 * 而因为我们每次递归传的都是当前项的`next`节点，所以跳出递归后，外边的`head`指向的是倒数第二项
 * 接着我们去变更指针的指向，让当前项`head.next`也就是最后一项的`next`指针指向了当前项`head`
 * 这样就完成了指针的翻转，当然，我们还需要清除当前`head`节点的`next`指向，方便跳出当前递归后，下一个递归来修改指针
 */
var _reverseList = function (head) {
  if (!head || !head.next) return head
  // 当前节点的next节点
  const next = head.next

  // 当next指向链表中的最后一项时，会跳出递归，所以返回的就是链表中的最后一个节点，以此来当做翻转后链表的首节点
  const reverseHead = _reverseList(next)
  console.log(next)
  // head是倒数第二项，那么next就是最后一项，所以这是让最后一项的next指向倒数第二项
  // 也就是说每次修改的其实都是head的next项也就是head的后一项的next指针，然后当走到第一项的时候，让它的next指向null即可
  next.next = head
  head.next = null
  return reverseHead
}
