'use strict'
//Array to List
function arrayToList(array) {
  let obj = {};
  obj.value = array.shift();
  obj.rest = (array.length > 0) ? arrayToList(array) : null;
  return obj;
}
console.log(arrayToList([10, 20]));// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(obj) {
  let array = [obj.value];
  if(obj.rest) {
    array = array.concat(listToArray(obj.rest));
  }
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]



//Keys and values to list
console.log(getKeyValuePairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))// → [["red","#FF0000"],["green","#00FF00"],["white","#FFFFFF"]]

function getKeyValuePairs(colorObj) {
  return Object.entries(colorObj);
}

//Invert keys and values

function invertKeyValue(keyValues) {
  let reversedKeys = {};
  for (const [key, value] of Object.entries(keyValues)) {
    reversedKeys[`${value}`] = `${key}`;
  }
  return reversedKeys;
}
console.log(invertKeyValue({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})); // → {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}



//Get all methods from an object
function getAllMethods(obj) {
  let reversedKeys = [];
  for (const val of Object.getOwnPropertyNames(obj)) {
    if(typeof obj[val] == "function") {
      reversedKeys.push(val);
    }
  }
  return reversedKeys;
}

console.log(getAllMethods(Math)); // → ["abs", "acos", "acosh", "asin", ...]

//Clock
function Clock()  {
  this.timeout = 1000;
  this.interval = 0;
}

Clock.prototype.run = function () {
    this.interval = setInterval(function () {
      let date = new Date();
      let seconds = date.getSeconds().toString().length < 2 ? "0"+ date.getSeconds() : date.getSeconds();
      console.log(`${date.getHours()}:${date.getMinutes()}:` + seconds);
    }, this.timeout);
}

Clock.prototype.stop = function () {
  clearInterval(this.interval);
}

const clock = new Clock();
clock.run();
setTimeout(function() {
  clock.stop();
}, 10000);

//Groups
class Group {
  constructor(array) {
    this.group = [...array];
  }
  static from(array) {
    return new Group(
        array.filter((v, index) => array.indexOf(v) === index)
    );
  }

  add(numToAdd) {
    if(!this.group.includes(numToAdd)){
      this.group.push(numToAdd);
    }
  }
  delete(num) {
    let idx = this.group.indexOf(num);
    if (idx !== -1) {
      this.group.splice(idx, 1);
    }
  }
  has(num) {
    return this.group.includes(num);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false



