/**
 * 利用头尾双指针，向中间逼近
 * - 当头尾不等时指针的值相等时，那就让头指针向后移动一位，尾指针向前移动一位
 * - 当头尾指针不等时，则要尝试删除头指针或者尾指针，再去进行比较(这里我们用了一个辅助方法，将指针移动来模拟删除，然后在这个辅助方法中去判断，移动后的字符是否相等，如果不相等，则直接返回`false`，如果相等，则继续指针向中间移动)
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      // l+1其实就是删除了左边指针的当前项
      // r-1就是删除了右边指针的当前项
      return isPali(s, l + 1, r) || isPali(s, l, r - 1)
    }
    // 如果头尾相等，那么就继续向中间移动
    l++
    r--
  }
  return true
}
/**
 * 辅助方法，其实就是再次判断传进来的`l`和'r'是否相等
 */
function isPali(str, l, r) {
  while (l < r) {
    if (str.charAt(l) !== str.charAt(r)) {
      return false
    }
    l++
    r--
  }
  return true
}
