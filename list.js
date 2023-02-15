// JS没有所谓的List类型，当不需要在一个很长的序列中查找元素，或者对其进行排序时，列表显得尤为有用。
// 适合列表中保存的元素不是太多时，相反，数据结构复杂，列表的作用就没有那么大了

function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.hasNext = hasNext
  this.hasPrev = hasPrev
  this.length = length
  this.currPos = currPos
  this.moveTo = moveTo
  this.getElement = getElement
  this.contains = contains
}

function append(element) {
  this.dataStore[this.listSize++] = element
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if(this.dataStore[i] === element) {
      return i
    }
  }

  return -1
}

function remove(element) {
  var foundAt = this.find(element)
  if(foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
    --this.listSize
    return true
  }

  return false
}

function length(){
  return this.listSize
}

function toString(){
  return this.dataStore
}

function insert(element, after) {
  var insertPos = this.find(after)
  if(insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element)
    this.listSize++
    return true
  }
  return false
}

function clear(){
  delete this.dataStore
  this.dataStore.length = 0
  this.listSize = this.pos = 0
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if(this.dataStore[i] === element) {
      return true
    }
  }

  return false
}

function front() {
  this.pos = 0
}

function end() {
  this.pos = this.listSize - 1
}

function prev() {
  --this.pos
}

function next () {
  if(this.pos < this.listSize) {
    ++this.pos
  }
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}

function hasNext() {
  return this.pos < this.listSize
}

function hasPrev() {
  return this.pos >= 0
}

var names = new List()
names.append('Clayton')
names.append('Ratmond')
names.append('Cynthia')
names.append('Jennifer')
names.append('Bryan')
names.append('Danay')

// names.front()
// names.next()
// names.next()
// names.next()
// names.prev()
// console.log(names.getElement())

// 迭代器访问列表

// 迭代器只是用来在列表上随意移动，而不应该和任何未列表增加或删除元素的方法一起使用
// for (names.front(); names.hasNext(); names.next()) {
//   console.log(names.getElement())
// }