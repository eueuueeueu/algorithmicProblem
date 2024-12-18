/**
 * @param {string}
 * @return {boolean}
*/
function isValid(s) {
  // 如果字符串的长度为奇数,我们可以直接返回 False,省去后续的遍历判断过程
  if (s.length % 2 !== 0) return false
  let stack = []
  for (let i = 0; i < s.length; i++) {
    // 如果是左括号，就入栈与之对应的右括号
    switch (s[i]) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      // 如果不是左括号就看看是不是与栈顶(前面入栈的右括号)元素相等,相等就弹出栈顶元素
      case stack[stack.length - 1]:
        stack.pop()
        break
      // 不相等代表不匹配，直接返回false
      default:
        return false
    }
  }
  // 遍历结束检测栈的长度，等于0代表栈空返回true,代表是有效的括号序列
  return stack.length === 0
};
console.log(isValid('[{}[]()]'));//true
console.log(isValid('[{]}'));//false
console.log(isValid('[]{}'));//true
console.log(isValid('[]'));//true
