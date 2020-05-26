import Node from './Node'
import { Compare, defaultCompare } from '../utils'
/**
 * 二叉搜索树
 */
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  /**
   * 向树中插入一个新的键
   * @param {*} key
   */
  insert(key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  /**
   * 辅助方法：将节点插入到根节点以外的位置
   * @param {Node} node
   * @param {*} key
   */
  insertNode(node, key) {
    // 插入左节点
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果做节点为空
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        // 如果左节点不为空，则递归子节点
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  /**
   * 中序遍历所有节点
   * `callback` 函数用来定义我们对遍历到的每一个节点进行的操作
   * @param {Function} callback
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * 辅助方法，用来递归节点，并执行`callback`
   * @param {Node} node
   * @param {Function} callback
   */
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 前序遍历
   * `callback` 函数用来定义我们对遍历到的每一个节点进行的操作
   * @param {Function} callback
   */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * 辅助方法，用来递归节点，并执行`callback`
   * @param {Node} node
   * @param {Function} callback
   */
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后序遍历
   * `callback` 函数用来定义我们对遍历到的每一个节点进行的操作
   * @param {Function} callback
   */
  postOrderTraverse(callback) {
    this.postOrderTraverse(this.root, callback)
  }

  /**
   * 辅助方法，用来递归节点，并执行`callback`
   * @param {Node} node
   * @param {Function} callback
   */
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  /**
   * 寻找数的最小键
   */
  min() {
    return this.minNode(this.root)
  }

  /**
   * 从树中的任意一个节点开始寻找最小的键
   * @param {Node} node
   */
  minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  /**
   * 寻找数的最大键
   */
  max() {
    return this.maxNode(this.root)
  }

  /**
   * 从树中的任意一个节点开始寻找最大的键
   * @param {Node} node
   */
  maxNode(node) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  /**
   * 搜索一个特定的值
   * @param {*} key
   */
  search(key) {
    return this.searchNode(key)
  }

  /**
   * 辅助方法：用来寻找一颗树或任意子树中的一个特定的值
   * @param {Node} node
   * @param {*} key
   */
  searchNode(node, key) {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  /**
   * 接受要移除的键，移除这个键
   * @param {*} key
   */
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  /**
   * 从树中的任意一个节点开始查找，删除这个键
   * @param {Node} node
   * @param {*} key
   */
  removeNode(node, key) {
    if (node === null) {
      return null
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 当前键等于node.key
      // 叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // 左节点为空或右节点为空
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // 左右节点都存在
      // 找到它的右子树中的最小节点，因为只有这个值才是大于左节点，小于右节点的
      // 然后把当前节点的值替换为当前找到的值
      // 最后将最小节点的值给删掉
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}
