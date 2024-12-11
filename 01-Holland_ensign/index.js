// 荷兰国旗问题
// 给定一个任意的数字数组和一个任意目标值
// 将小于等于目标值的元素放置在原数组的左侧,将大于目标值的元素放置在原数组的右侧
// (不能创建新数组，只能操作原数组)
function HollandEnsign(arr, target) {
  if (arr === null || arr.length < 2) return
  // 定义数组左侧小于等于target值的区域
  let left = -1
  // 定义数组右侧大于target值的区域
  let right = arr.length
  // 当前位置
  let index = 0
  while (index < right) {
    if (arr[index] < target) {
      left++
      let temp = arr[index]
      arr[index] = arr[left]
      arr[left] = temp
      index++
    } else if (arr[index] > target) {
      right--
      let temp = arr[index]
      arr[index] = arr[right]
      arr[right] = temp
    } else {
      index++
    }
  }
  return console.log('遍历后的数组:',arr);
}
HollandEnsign([1, 2, 3, 55, 44, 63, 5, 8, 9, 11, 19, 35, 47], 8)