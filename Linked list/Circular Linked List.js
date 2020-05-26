class LinkedListNode {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
  }

  length() {
    let i = 0
    let current = this.head
    while (current !== null) {
      current = current.next
      i++
    }
    return i
  }

  // 在 position 后插入
  insertAfter(postion) {}
}
