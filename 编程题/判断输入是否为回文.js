/**
 * 使用字符串和数组API
 * @param {String} input
 * @returns {boolean}
 */
function isPlalindrome(input) {
  if (typeof input !== 'string') {
    return false
  }
  return input.split('').reverse().join('') === input
}

/**
 * 不使用字符串和数组API
 * @param {String} input
 * @returns {boolean}
 */

function _isPlalindrome(input) {
  if (typeof input !== 'string') {
    return false
  }
  let i = 0,
    j = input.length - 1
  while (i < j) {
    if (input.charAt(i) !== input.charAt(j)) return false
    i++
    j--
  }
  return true
}
