class MinStack {
  constructor() {
    this.items = []
    this.helper = []
  }

  push(item) {
    this.items.push(item)
    // 当helper栈为空，或者当前项小于helper中的栈顶的项时，再压入helper栈中
    // 因此helper栈中的栈顶存储的值一定是当前的最小值
    if (
      this.helper.length === 0 ||
      item <= this.helper[this.helper.length - 1]
    ) {
      this.helper.push(item)
    }
  }

  pop() {
    // 因为helper栈顶的是最小值，所以每次pop的时候都要判断当前只是不是最小值，如果恰巧是最小值，那么也要顺便把helper中栈顶的最小值给他pop掉
    const cur = this.items.pop()
    if (cur === this.helper[this.helper.length - 1]) {
      this.helper.pop()
    }
  }

  top() {
    return this.items[this.items.length - 1]
  }

  getMin() {
    return this.helper[this.helper.length - 1]
  }
}
