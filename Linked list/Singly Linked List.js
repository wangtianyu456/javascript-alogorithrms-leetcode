class LinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
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

  // 追加节点
  append(data) {
    const newNode = new LinkedListNode(data)
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
  }

  // 获取节点,获取指定index的节点
  get(index) {
    if (index > -1) {
      let current = this.head
      let i = 0
      while (current !== null && i < index) {
        current = current.next
        i++
      }
      return current !== null ? current.data : undefined
    } else {
      return undefined
    }
  }

  // 在指定位置插入节点
  insert(position, data) {
    const newNode = new LinkedListNode(data)
    const length = this.length()
    if (position >= 0 && position <= length) {
      let current = this.head
      let prev = null
      let i = 0
      if (position === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        while (i < position) {
          prev = current
          current = current.next
          i++
        }
        prev.next = newNode
        newNode.next = current
      }
    } else {
      throw new RangeError(
        `Index ${position} does not exist in the list,can not insert`
      )
    }
  }

  // remove移除指定index的节点
  remove(index) {
    if (this.head === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`)
    }
    if (index === 0) {
      const data = this.head.data
      this.head = this.head.next
      return data
    }

    let current = this.head
    let previous = null
    let i = 0
    while (current !== null && i < index) {
      previous = current
      current = current.next
      i++
    }
    if (current !== null) {
      previous.next = current.next
      return current.data
    }
    // if node wasn't found, throw an error
    throw new RangeError(`Index ${index} does not exist in the list.`)
  }

  // 判断链表中是否存在某节点
  search(data) {
    let current = this.head
    if (current === null) return false
    while (current !== null) {
      if ((current.data = data)) return true
      current = current.next
    }
    return false
  }

  // make the list iterable
  *values() {
    let current = this.head
    while (current !== null) {
      yield current.data
      current = current.next
    }
  }

  [Symbol.interator]() {
    return this.values()
  }
}
