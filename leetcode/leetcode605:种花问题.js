/**
 * 解法1：当当前项为0，且左右为0时，即满足条件，并对边界做一下特殊处理
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  // 此处默认在数组末尾添加一个0，是为了解决右侧边界的问题，只要添加完这一项后右侧边界满足[0,0,0]说明可以种花
  flowerbed.push(0)
  for (let i = 0; i < flowerbed.length; i++) {
    // 只有当前项是0时，才进行判断，为1时直接跳过
    if (flowerbed[i] === 0) {
      // 左边界问题，只要当前项的右边也是0，则说明第一项的位置可以种花
      if (i === 0 && flowerbed[1] === 0) {
        count++
        i++
      } else {
        // 只要满足[0,0,0]的条件的就说明可以种花
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          count++
          i++
        }
      }
    }
  }
  return count >= n
}

/**
 * 解法2：直接判断当前项为0且前后都不为0时，即满足条件
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const _canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    const element = flowerbed[i]
    if (flowerbed[i - 1] !== 1 && element === 0 && flowerbed[i + 1] !== 1) {
      count++
      i++
    }
  }
  return count >= n
}
