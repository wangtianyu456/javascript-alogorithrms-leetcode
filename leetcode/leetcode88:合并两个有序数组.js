/**
 * leetcode88:合并两个有序数组
 */
const merge = (nums1, m, nums2, n) => {
  let len = m + n - 1
  let len1 = m - 1
  let len2 = n - 1
  while (len1 >= 0 && len2 >= 0) {
    if (nums1[len1] <= nums2[len2]) {
      nums1[len] = nums2[len2]
      len2--
      len--
    } else {
      nums1[len] = nums1[len1]
      len1--
      len--
    }
  }
  if (len2 >= 0) {
    nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
  }
}
