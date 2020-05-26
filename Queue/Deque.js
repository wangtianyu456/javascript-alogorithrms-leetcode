/**
 * 双端队列
 * 队头队尾都可以进出队列
 */
class Deque {
  constructor() {
    this.items = []
  }

  /**
   * 队头入队
   * @param {*} value
   */
  addFirst(value) {
    this.items.unshift(value)
  }

  /**
   * 移除队头项
   */
  removeFirst() {
    this.items.shift()
  }

  /**
   * 队尾入列
   * @param {*} value
   */
  addLast(value) {
    this.items.push(value)
  }

  /**
   * 队尾出列
   */
  removeLast() {
    this.items.pop()
  }

  isEmpty() {
    return this.size() === 0
  }

  front() {
    return this.items[0]
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }
}
