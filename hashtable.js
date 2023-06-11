function hashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  // this.get = get;
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function put(data) {
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

function showDistro() {
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(i + ": " + this.table[i]);
    }
  }
}

// 更好的散列函数

function betterHash(string, arr) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % arr.length;
  return parseInt(total);
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = new hashTable();
for (var i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

