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

var s = new Stack()

s.push('David')
s.push('Raymond')
s.push('Bryan')
console.log('length: ' + s.length())
console.log(s.peek())
console.log(s.top)

var popped = s.pop()
console.log('The popped element is:' + popped)
console.log(s.peek())
s.push('Cynthia')
console.log(s.peek())
s.clear()
console.log('length: ' + s.length())
console.log(s.peek())
s.push('Clayton')
console.log(s.peek())
