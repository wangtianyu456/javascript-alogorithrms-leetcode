/**
 * 解法一：嵌套循环
 * - 先将传进来的字符串拆分成数组，然后将数组的一项拆分开来，放进`res`中
 * - 接着去循环数字数组，去取`res`的值和后面匹配到的字母去做组合
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  // 先把第一个值存下来
  let res = [...map[digits.split('')[0]].split('')]
  for (let i = 1; i < digits.length; i++) {
    // 创建一个临时变量
    const temp = []
    // 取出当前匹配的字母从数组中下标为1的项开始
    const arr = [...map[digits.split('')[i]].split('')]
    for (let j = 0; j < res.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        temp.push(`${res[j]}${arr[k]}`)
      }
    }
    // 每次循环组合完成之后，都要把最新的结果赋值给res
    // 然后下次循环进来，res就会以最新的结果来进行循环从而进行组合
    res = temp
  }
  return res
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var _letterCombinations = function (digits) {
  if (!digits.length) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const result = []
  dfs('', digits, 0, map, result)
  return result
}

function dfs(str, digits, level, map, result) {
  if (level === digits.length) {
    result.push(str)
    return
  }
  const letters = map[digits[level]]
  for (let i = 0; i < letters.length; i++) {
    dfs(str + letters[i], digits, level + 1, map, result)
  }
}
