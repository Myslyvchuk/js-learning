// Change the capitalization of all letters in a string
'use strict'
String.prototype.reverseCapitalization = function () {
  let result = ''
  for (let i = 0; i < this.length; i++) {
    if (this.charCodeAt(i) >= 65 && this.charCodeAt(i) <= 90) {
      result += this[i].toLowerCase();
    } else if (this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122) {
      result += this[i].toUpperCase();
    } else {
      result += this[i];
    }
  }
  return result;
}

function changeCase(str) {
  return str.reverseCapitalization();
}

console.log(changeCase("21century")); // Output: 21CENTURY
console.log(changeCase("Hybris")); // Output: hYBRIS

//Filter out the non-unique values in an array

const filterNonUnique = function (nonUniqueArray) {
  return nonUniqueArray
  .filter(
      (value) =>
          !nonUniqueArray.filter(
              (value, index) => nonUniqueArray.indexOf(value) !== index)
          .includes(value));
}

console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // Output: [1,3,5]
console.log(filterNonUnique([1, 2, 3, 4])); // Output: [1,2,3,4]

//Sort string in alphabetical order

function alphabetSort(sortString) {
  return sortString.split('').sort().join('');
}

console.log(alphabetSort("Python")); // Output: ‘Phnoty’

//Get min integer

function getSecondMinimum(array) {
  return array.sort()[1];
}

console.log(getSecondMinimum([5, 0, 7, 3, 8])); // Output: 3

//Double every even integer

function doubleEveryEven(array) {
  return array.map(function (el) {
    if (el % 2 === 0) {
      el *= 2;
    }
    return el;
  })
}

console.log(doubleEveryEven([2, 0, 7, 3, 8, 4])); // Output: [4,0,7,3,16,8]

//Create array with all possible pairs of two arrays

const getArrayElementsPairs = function (array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      let pair = [];
      pair.push(array1[i], array2[j]);
      result.push(pair);
    }
  }
  return result;
}

console.log(getArrayElementsPairs([1, 2], ['a', 'b'])); // Output: [[1, “a”], [1, “b”], [2, “a”], [2, “b”]]

//deepEqual
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2
      == "object" && obj2 != null)) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }

    for (let prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        if (!deepEqual(obj1[prop], obj2[prop])) {
          return false;
        }
      } else {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // Output: true
console.log(deepEqual(obj, {here: 1, object: 2})); // Output: false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // Output: true

//formatDate

Array.prototype.concatArrayIntoDashString = function () {
  let result = '';
  for (let i = 0; i < this.length; i++) {
    //if month then add 1
    result += i === 1 ? this[i] + 1 : this[i];
    if (i !== this.length - 1) {
      result += '-'
    }
  }
  return result;
}

const formatDate = function (date) {
  if (Array.isArray(date)) {
    date = date.concatArrayIntoDashString();
  }
  let d = new Date(date);
  let day = d.getDate().toString().length < 2 ? ('0' + d.getDate())
      : d.getDate().toString();
  let month = (d.getMonth() + 1).toString().length < 2 ? ('0' + (d.getMonth()
      + 1)) : (d.getMonth() + 1).toString();
  let year = d.getFullYear().toString().substring(2);
  return `${day}.${month}.${year}`;
}

console.log(formatDate('2011-10-02')); // 02.10.11
console.log(formatDate(1234567890000)); // 14.02.09
console.log(formatDate([2014, 0, 1])); // 01.01.14
console.log(formatDate(new Date(2014, 0, 1))); // 01.01.14
