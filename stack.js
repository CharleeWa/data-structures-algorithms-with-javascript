/*

  栈是和列表类似的一种数据结构，可以用来解决计算机世界的很多问题。
  栈是一种高效的数据结构，，因为数据只能在栈顶添加或删除，所以这样的操作很快
  而且容易实现。

  栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。
  栈被称为一种后入现出的数据结构。
*/


function Stack() {
  // 用来保存栈内元素
  this.dataStore = []
  // 记录栈顶位置
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.clear = clear
}

function push(element) {
  this.dataStore[this.top++] = element
}

function pop(){
  return this.dataStore[--this.top]
}

function peek() {
  return this.dataStore[this.top - 1]
}

function length() {
  return this.top
}

function clear() {
  this.top = 0
}

// var s = new Stack()

// s.push('David')
// s.push('Raymond')
// s.push('Bryan')
// console.log('length: ' + s.length())
// console.log(s.peek())
// console.log(s.top)

// var popped = s.pop()
// console.log('The popped element is:' + popped)
// console.log(s.peek())
// s.push('Cynthia')
// console.log(s.peek())
// s.clear()
// console.log('length: ' + s.length())
// console.log(s.peek())
// s.push('Clayton')
// console.log(s.peek())

// 利用栈将数字转换为二至九进制的数字
// function mulBase(num, base) {
//   var s = new Stack()
//   do {
//     s.push(num % base)
//     num = Math.floor(num /= base)
//   } while (num > 0)
//   var converted = ''
//   while (s.length() > 0) {
//     converted += s.pop()
//   }
//   return converted
// }

// 利用栈，判断一个字符串是否是回文

function isPalindrome(word) {
  var s = new Stack()
  for (var i = 0; i < word.length; i++) {
    s.push(word[i])
  }
  var rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word === rword) {
    return true
  } else {
    return false
  }
}

var word = 'racecar'
if (isPalindrome(word)) {
  console.log(word + ' is a palindrome.')
} else {
  console.log(word + ' is not a palindrome.')
}

// 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算术表达式作为参数，
// 返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例子：2.3 + 23 / 12 + (3.14159×0.24。

// 一个算术表达式的后缀表达式形式如下：op1 op2 operator，
// 使用两个栈，一个用来存储操作数，另一个用来存储操作符，设计并实现一个JavaScript函数，
// 该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。

// 现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，
// 但是你不喜欢黄色的糖果。使用栈（有可能用到多个栈）写一段程序，在不改变盒内其他糖果叠放顺序的基础上，
// 将黄色糖果移出。