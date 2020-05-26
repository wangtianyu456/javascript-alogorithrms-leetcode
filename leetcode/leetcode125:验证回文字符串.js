/**
 * @param {string} s
 * @return {boolean}
 * 题目中只考虑字母和数字，不考虑大小写，空格，标点符号等，因此我们将其余的空格，标点符号等无关的字符都替换掉，然后全转为小写，再去做比较
 * 解法一：直接用字符串和数组的API
 */
const isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return s.split('').reverse().join('') === s
}

/**
 * @param {string} s
 * @return {boolean}
 * 题目中只考虑字母和数字，不考虑大小写，空格，标点符号等，因此我们将其余的空格，标点符号等无关的字符都替换掉，然后全转为小写，再去做比较
 * 解法二：利用头尾指针来实现，不停遍历，向中间靠拢
 */
const _isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) return false
    i++
    j--
  }
  return true
}
