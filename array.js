// 一个存储元素的线性集合，但和其它编程语言略有不同，JavaScript 中的数组是一种特殊的对象，
// 用来表示偏移量的索引是该对象的属性，索引可能是整数。然后，这些数字索引在内部转换为字符串类型，
// 这是因为JavaScript 对象中的属性名必须是字符串。效率不如其他语言效率高。

// JavaScript中的数组，严格来说应该称为对象，由于是一种特殊的对象，因此有许多属性和方法。
// 数据创建有多种方式，推荐使用[]操作符，和使用array的构造函数相比，这种方式效率最高。

// 浅复制
// var nums = []
// for (let i = 0; i < 100; i++) {
//   nums[i] = i + 1
// }

// var samenums = nums

// nums[0] = 400
// console.log(samenums[0])

// 深复制（实现一个循环）

// join(),toString()函数会把数组转换位字符串

// var nums = [1,2,3,7,8,9]
// nums.splice(3, 0, 4,5,6)
// console.log(nums)

// 数组排序

// reverse 翻转

// var nums = [1,2,3,4,5]
// nums.reverse()
// console.log(nums)

// 对字符串进行排序 sort

// var strs = ['wang', 'child', 'other']
// strs.sort()
// console.log(strs)

// 对数字排序 sort -> compare

function compare(num1, num2) {
  return num1 - num2
}

var nums = [399, 200, 100, 2]
nums.sort(compare)
console.log(nums)
