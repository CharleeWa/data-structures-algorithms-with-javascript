// 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。
// 队列用于存储按顺序排列的数据，先进先出，这点和栈不一样。在栈中，最后入栈的元素反而被优先处理。
// 可以把队列想象成在银行前排队的人群，排在最前面的人第一个办理业务，新来的人只能在后面排队，直到轮到他们为止。

// 队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。队列被用在很多地方，比如提交操作系统执行的一系列进程、打印任务池等等。
// 一些仿真系统用队列来模拟银行或杂货店里排队的顾客。

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue; // 向队尾添加一个元素
  this.dequeue = dequeue; // 删除队首的元素
  this.front = front; // 读取队首的元素
  this.back = back; // 读取队尾的元素
  this.toString = toString; // 显示队列内所有元素
  this.empty = empty; // 判断队列是否为空
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  let retStr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

// 测试

// let q = new Queue();
// q.enqueue('Meredith');
// q.enqueue('Cynthia');
// q.enqueue('Jennifer');
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log('Front of queue: ' + q.front());
// console.log('Back of queue: ' + q.back());

// 使用队列：方块舞的舞伴分配问题

function Dancer(name, sex) {
  this.name = name
  this.sex = sex
}

function getDancers(males, females) {
  var names = read('dancers.txt').split('\n');
  for (var i = 0; i < names.length; i++) {
    names[i] = names[i].trim();
  }
  for (var i = 0; i < names.length; i++) {
    var dancer = names[i].split(' ');
    var sex = dancer[0];
    var name = dancer[1];
    if (sex == 'F') {
      femaleDancers.enqueue(new Dancer(name, sex));
    } else {
      maleDancers.enqueue(new Dancer(name, sex))
    }
  }
}

function dance (males, females) {
  print('The dance partners are: \n');
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    putstr("Female dancer is:" + person.name);
    person = males.dequeue();
    print("and the male dancer is:" + person.name);
  }
  print();
}

// 测试程序
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
  print(femaleDancers.front().name + " is waiting to dance.");
}

if (!maleDancers.empty()) {
  print(maleDancers.front().name + " is waiting to dance.");
}
