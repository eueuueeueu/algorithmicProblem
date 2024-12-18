// 方法1
// 遍历嵌套数组的每一个成员   广度优先搜索 (BFS)算法
// let arr = [4, [5, 6], [7, 8], [9, 10]]
let arr = [4, [5, 6], [7, 8], [9, 10], [1, [2, 3, [4, 5, [6, 7, [8, 9]]]]]]
function getFlatteningArr(arr) {
  let resArr = []
  for (let i = 0; i < arr.length; i++) {
    // 如果是数字就直接插入新数组
    if (typeof arr[i] === 'number') {
      resArr.push(arr[i])
    } else {
      // 如果是数组就遍历，扁平化一层，加到原数组的后面，
      // 此时原数组长度增加，就算还有n层数组嵌套,还是会扁平化到的
      for (let j = 0; j < arr[i].length; j++) {
        arr.push(arr[i][j])
      }
    }
  }
  return resArr
}
console.log(getFlatteningArr(arr));
// [4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9]