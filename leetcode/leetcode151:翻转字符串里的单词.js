/**
 * 解法一：我是一个无情的API机器--正则表达式匹配
 * @param {string} s
 * @return {string}
 *
 * - 时间复杂度` O(n)` -- `n`为字符串的长度
 * - 空间复杂度 `O(n)` -- arr空间
 */
var reverseWords = function (s) {
  const reg = /\s*(\S+)\s*/g
  const arr = []
  s.replace(reg, (...arg) => {
    arr.push(arg[1])
  })
  return arr.reverse().join(' ')
}

/**
 * 解法二：利用队列(或栈也可以)，将字符串去除两端的空格后，字符串就可以以空格来分割出每个单词，然后将从左到右单词依次放入队列的头部，这样最终的队列就是倒着的，再将其转为以空格分割的字符串即可
 * @param {string} s
 * @return {string}
 *
 * - 时间复杂度` O(n)` -- `n`为字符串的长度
 * - 空间复杂度 `O(n)` -- 队列所需要的空间
 */
var _reverseWords = function (s) {
  let left = 0
  let right = s.length - 1
  const queue = []
  let word = ''
  // 去除首尾空格
  while (s.charAt(left) === ' ') left++
  while (s.charAt(right) === ' ') right--
  while (left <= right) {
    const char = s.charAt(left)
    if (char === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if (char !== ' ') {
      word += char
    }
    left++
  }
  // 循环到字符串的最后一位时，跳出循环，将最后一个单词放入队列的头部
  queue.unshift(word)
  return queue.join(' ')
}

const str1 = 'the sky is blue'
const str2 = '  hello world!  '
reverseWords(str1)
// console.log(reverseWords(str1))
// console.log(reverseWords(str2))
