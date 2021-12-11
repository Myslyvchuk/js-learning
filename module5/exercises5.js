"use strict"
//Delay
function delay(timeout){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
delay(1000).then(() => console.log("Hey!"));

//Array of promises in series -> Write a function to run an given array of promises in series, without using async/await syntax

function runPromisesInSeries(arrayOfPromises){
  return arrayOfPromises.reduce((acc, val) => acc.then(val), Promise.resolve());
}

let promiseResult = runPromisesInSeries([
  () => delay(1000).then(() => {
    console.log("message in 1 second")
  }),
  () => delay(2000).then(() => {
    console.log("message in 3 seconds")
  })
]);

//Building Promise.all
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let loopLength = promises.length;
    let results = new Array(loopLength);
    if (promises.length === 0) {
      resolve(results);
    }
    promises.forEach((promise,i) => {
      promise.then((result) => {
        results[i] = result;
        if ((--loopLength) === 0) {
          resolve(results);
        }
      }).catch((e) => {
        reject(e);
      });
    })
  })
}

Promise_all([]).then(array => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
.then(array => {
  console.log("We should not get here");
}).catch(error => {
  if (error !== "X") {
    console.log("Unexpected failure:", error);
  }
});

//Fibonacci
function *fibonacci(n, cur = 0, next = 1) {
  if (n === 0) {
    return  cur;
  }
  yield cur;
  yield *fibonacci(n-1, next, cur + next);
}

let [...first10] = fibonacci(40);
console.log(first10); // → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Generator helper
const asyncTask1 = () => new Promise((resolve, reject) => setTimeout(() => resolve("first resolved"), 1000));
const asyncTask2 = () => new Promise((resolve, reject) => setTimeout(() => resolve("second resolved"), 1000));
const asyncTask3 = () => new Promise((resolve, reject) => setTimeout(() => reject("third rejected"), 1000));
console.log("invoke helper")

helper(
    function* main() {
      try {
        const a = yield asyncTask1();
        console.log(a);
        const b = yield asyncTask2();
        console.log(b);
        const c = yield asyncTask3();
      } catch (e) {
        console.error("error happened", e);
      }
    }
);

function helper(func) {
  const iterator = func();
  function iterate(iteration) {
    if(iterator.done){
      return iterator.value;
    }
    const promise = iteration.value;
    return promise
    .then(x => iterate(iterator.next(x)))
    .catch((error) => iterator.throw(error))
  }
  return iterate(iterator.next());
}






