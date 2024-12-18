// 栈 Stack
// 栈 LIFO （last in first out） 后进先出
// push(element(s)): 添加一个(或几个)新元素到栈顶。
// pop(): 移除栈顶的元素，同时返回被移除的元素。
// peek(): 返回栈顶的元素, 不对栈做任何修改(该方法不会移除栈顶的元素, 仅仅返回它
// isEmpty(): 如果栈里没有任何元素就返回 true，否则返回 false。
// clear(): 移除栈里的所有元素。
// size(): 返回栈里的元素个数。该方法和数组的 length 属性很类似。
(function (window) {
  let prototype = {
    push: function (value) {
      this.items[this.count] = value
      this.count++
    },
    pop: function () {
      let item = this.items[this.count - 1]
      delete this.items[this.count - 1]
      this.count--
      return item
    },
    peek: function () {
      return this.items[this.count - 1]
    },
    isEmpty: function () {
      return this.count === 0
    },
    clear: function () {
      this.items = {}
      this.count = 0
    },
    size: function () {
      return this.count
    },
  }
  function createStack() {
    let stack = {
      count: 0,
      items: {},
    }
    stack.__proto__ = prototype
    return stack
  }
  window.createStack = createStack
})(window)

let s1 = createStack()
s1.push(11)
s1.push(22)
s1.push(33)
s1.push(44)
s1.push(55)
console.log(s1);


// 有效的括号序列
let bracket1 = '{}()[]'
let bracket2 = '{(})[]'
let bracket3 = '{}())'
function isValidBracket(bracket) {
  // 传入的不是一个字符串就报错
  if (typeof bracket !== "string") throw new Error('bracket must be string')
  // // 如果字符串的长度为奇数,直接返回 False,省去后续的遍历判断过程
  if (bracket.length % 2 !== 0) return false
  // 创建一个栈
  let stack = createStack()
  for (let i = 0; i < bracket.length; i++) {
    switch (bracket[i]) {
      // 是左括号就入栈
      case '(':
        stack.push(')')
        break;
      case '{':
        stack.push('}')
        break;
      case '[':
        stack.push(']')
        break;
      // 如果不是左括号就看看是不是与栈顶(前面入栈的右括号)元素相等,相等就弹出栈顶元素
      case stack.peek():
        stack.pop()
        break;
      // 不相等代表不匹配，直接返回false
      default:
        return false
    }
  }
  // 遍历结束检测栈的长度，等于0代表栈空返回true,代表是有效的括号序列
  return stack.count === 0
}
console.log(isValidBracket(bracket1));//true
console.log(isValidBracket(bracket2));//false
console.log(isValidBracket(bracket3));//false
console.log(isValidBracket('([}}])'));//false


// 栈的其他用法
// 10进制转二进制
/*
  10/2=5 ...0
  5/2=2  ...1
  2/2=1  ...0
  1/2=0  ...1
*/
// 后进先出---> 1010
function toBinary(decimalNumber) {
  let stack = createStack()
  let binaryString = ''
  while (decimalNumber > 0) {
    let rest = decimalNumber % 2
    stack.push(rest)
    decimalNumber = Math.floor(decimalNumber / 2)
  }
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
console.log(toBinary(10));