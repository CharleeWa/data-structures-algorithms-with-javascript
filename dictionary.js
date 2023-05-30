function Dictionary() {
  this.datastore = new Array();
}

function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}

function remove(key) {
  delete this.datastore[key];
}

function showAll() {
  var datakeys = Array.prototype.slice.call(Object.keys(this.datastore));
  for (var key in datakeys) {
    console.log(datakeys[key] + " -> " + this.datastore[datakeys[key]]);
  }
}