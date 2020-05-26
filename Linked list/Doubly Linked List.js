class LinkListNode {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    // 头节点
    this.head = null
    // 尾结点
    this.tail = null
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

  append(element) {
    const newNode = new LinkListNode(element)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  // 在 position 位置插入节点
  insert(position, element) {
    const newNode = new LinkListNode(element)
    const length = this.length()
    if (position >= 0 && position <= length) {
      let prev = null
      let current = this.head
      let i = 0

      if (position === 0) {
        // 如果是在首位添加
        // 需要判断是否为空链表
        if (this.head !== null) {
          newNode.next = this.head
          this.head.prev = newNode
          this.head = newNode
        } else {
          this.head = newNode
          this.tail = newNode
        }
      } else if (position === length) {
        // 如果是在末尾添加
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else {
        // 如果是在链表中间添加
        while (i < position) {
          prev = current
          current = current.next
          i++
        }
        newNode.prev = prev
        newNode.next = current
        prev.next = newNode
        current.prev = newNode
      }
      return true
    } else {
      return false
    }
  }

  // 删除 position 位置的节点
  removeAt(position) {
    const length = this.length()
    if (position >= 0 && position < length && length > 0) {
      let prev = null
      let current = this.head
      let i = 0
      if (position === 0) {
        // 移除 当前的head节点
        if (length === 1) {
          this.head = null
          this.tail = null
        } else {
          this.head = this.head.next
          this.head.prev = null
        }
      } else if (position === length) {
        // 移除尾结点
        current = this.tail
        this.tail = current.prev
        current.next = null
      } else {
        // 移除中间的节点
        while (i < position) {
          prev = current
          current = current.next
          i++
        }
        prev.next = current.next
        current.next.prev = prev
      }
      return current.element
    } else {
      return null
    }
  }

  // 查找
  search(element) {
    const length = this.length()
    if (length > 0) {
      let current = this.head
      if (current === null) return false
      while (current !== null) {
        if (current.element === element) return true
        current = current.next
      }
    }
  }
}
