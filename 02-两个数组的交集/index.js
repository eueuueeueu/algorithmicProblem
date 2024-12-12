//3.两个数组的交集
/*
给定两个数组 nums1 和 nums2，返回它们的交集。输出结果中的每个元素一定是 唯一 的。我们可以不考虑输出结果的顺序

示例 1:
    输入: nums1 = [1,2,2,1]，nums2 = [2, 2]
    输出: [2]
示例 2:
    输入: nums1 = [4,9,5]，nums2 = [9,4,9,8,4]
    输出: [9,4]
    解释: [4,9]也是可通过的
*/
function Arrintersection(nums1, nums2) {
  // 1.先用concat把两个数组连在一起，然后去重，得到一个拥有两个数组所有元素的新数组concatNewArr
  let concatNewArr = [...new Set(nums1.concat(nums2))]
  // 2.遍历concatNewArr,
  for (let i = 0; i < concatNewArr.length; i++) {
    // 如果nums1.indexOf('遍历的元素') !== -1 && nums2.indexOf('遍历的元素') !== -1
    if (nums1.indexOf(concatNewArr[i]) !== -1 && nums2.indexOf(concatNewArr[i]) !== -1) {
      // 说明是交集的元素，那么不做任何操作
    } else {
      // 说明不是交集的元素，我们删除它concatNewArr.splice(i,1)
      concatNewArr.splice(i, 1)
      // 删了一个元素，为了保证循环次数正常,i--
      i--
    }
  }
  return concatNewArr
}
console.log(Arrintersection([4, 9, 5], [9, 4, 9, 8, 4]));