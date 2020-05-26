/**
 * 解法一：利用栈和正则匹配来实现
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // 用栈来保存
  const arr = []
  const match = (str) => {
    const j = str.match(/^0+|1+/g)[0]
    const o = (j[0] ^ 1).toString().repeat(j.length)

    // 这里用字符串匹配，是否以字符串开头，原理一样
    // const finalStr = `${j}${o}`
    // if (str.startsWith(finalStr)) {
    //   return finalStr
    // } else {
    //   return undefined
    // }

    // 这里用正则
    const reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return str.match(reg)[0]
    } else {
      return ''
    }
  }
  // 先循环
  for (let i = 0; i < s.length; i++) {
    const sub = match(s.slice(i))
    if (sub) {
      arr.push(sub)
    }
  }
  return arr.length
}

/**
 * @param {string} s
 * @return {number}
 */
var _countBinarySubstrings = function (s) {
  let pre = 0 // 上一个字符串的重复数
  let curr = 1 // 当前字符串的重复数
  let result = 0
  // 这里循环需要小于s.length-1，因为在内部比较的时候是和s+1比较的
  for (let i = 0; i < s.length - 1; i++) {
    // 当前项和下一项相等
    if (s[i] === s[i + 1]) {
      curr++
    } else {
      // 当前项和下一项不相等
      // 那我们就把`curr`的长度给`pre`的长度，重置`curr`
      pre = curr
      curr = 1
    }
    // 这里是当`pre`的长度大于等于`curr`的长度的时候就说明之前的重复字符串和当前的重复字符串存在连续了
    // 如 `pre`是 00 `cur`是1 那么此时就可以判定出现了重复连续字符串
    // `pre`是00 `cur`是`11` 此时也可以
    if (pre >= curr) {
      result++
    }
  }
  return result
}
