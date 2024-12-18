// 2. 【验证字符串是否为有效的括号序列】编写⼀个函数，接收⼀个只包含字符 '(', ')',
// '{', '}', '[' 和 ']' 的字符串，判断字符串是否是⼀个有效的括号序列。
/**
 * @param {string}
 * @return {boolean}
*/
function isValid(braces) {
  const stack = []
  try {
    let temp = braces.split('')
    for (let i = 0; i < temp.length; i++) {
      let item = temp[i]
      if (item === '(' || item === '{' || item === '[') {
        // 如果是左括号，就入栈
        stack.push(item)
      } else {
        // 如果是右括号,就删除栈顶元素,看看删除的那个是不是与之对应的左括号，如果不是就throw弹出异常到catch去返回false
        if (item === ')' && stack.pop() !== '(') throw ''
        if (item === ']' && stack.pop() !== '[') throw ''
        if (item === '}' && stack.pop() !== '{') throw ''
      }
    }
  } catch {
    return false
  }
  // 遍历结束检测栈的长度，等于0代表栈空返回true,代表是有效的括号序列
  return stack.length === 0
}
console.log(isValid('[{}[]()]'));//true
console.log(isValid('[{]}'));//false
console.log(isValid('[]{}'));//true
console.log(isValid('[]'));//true
console.log(isValid('()'));//true