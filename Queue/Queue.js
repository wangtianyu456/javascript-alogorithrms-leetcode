class Queue {
  constructor() {
    this.items = []
  }

  /**
   * 进队
   */
  enqueue(value) {
    this.items.push(value)
  }

  /**
   * 出队
   */
  dequeue() {
    this.items.shift()
  }

  /**
   * 是否为空
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * 获取队头元素
   */
  front() {
    return this.items[0]
  }

  /**
   * 清空队列
   *
   */
  clear() {
    this.items = []
  }

  /**
   * 获取队列的长度
   */
  size() {
    return this.items.length
  }
}
