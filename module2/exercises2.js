"use strict";

// Currying
const mergeWords = function (f)  {
    return function (a) {
        if (a) {
            return mergeWords(`${f} ${a}`);
        }
        return f;
    };
};

console.log(mergeWords("GNU")("is")("not")("Unix.")()); // Output: ‘GNU is not Unix.’

//Every/Some

let goodUsers = [
    {id: 1},
    {id: 2},
    {id: 3}
];

let testAllValid = checkUsersValid(goodUsers);
testAllValid([
    {id: 2},
    {id: 1}
]);

testAllValid([
    {id: 2},
    {id: 4},
    {id: 1}
]);

function checkUsersValid(validUsers) {
    return function checkIfUserPresentInsideValid(testUser) {
        let idArray = validUsers.map((obj) => obj.id);
        return console.log(testUser
            .map((user) => idArray.includes(user.id))
            .reduce((acc, next) => acc && next, true));
    };
}

//Reduce
const inputWords = ["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"];

function countWords(input) {
    return input.reduce((acc, elem) => {
        if (Object.keys(acc).includes(elem)) {
            acc[elem]++;
        } else {
            acc[elem] = 1;
        }
        return acc;
    }, {});
}

console.log(countWords(inputWords));

//Palindrome
isPalindrome("madam"); // Output: ‘The entry is a palindrome’
isPalindrome("fox"); // Output: ‘Entry is not a palindrome’

function isPalindrome(str) {
    return str.split("").reverse().join("").toLowerCase() === str.toLowerCase() ?
        console.log("The entry is a palindrome") :
        console.log("Entry is not a palindrome");
}

//Recursion
//1.Write a factorial function that takes a positive integer N as a parameter and prints the result of N! (factorial).
function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

//Not sure if I need to invoke function like this or add console.log inside.
console.log(factorial(5));


//2.Write a function to convert an amount to coins
function amountToCoins(amount, coins) {
    let dscSortCoins = coins.sort((first, second) => second > first);
    if (amount === 0) return [];
    if (amount >= dscSortCoins[0]) {
        let leftovers = (amount - dscSortCoins[0]);
        return [dscSortCoins[0]].concat(amountToCoins(leftovers, dscSortCoins));
    } else {
        coins.shift();
        return amountToCoins(amount, dscSortCoins);
    }

}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

//3. Write a function using recursion that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.
repeat("Wassup", 5);

function repeat(str, times) {
    if (times === 1) {
        console.log(str);
    } else {
        console.log(str);
        repeat(str, times - 1);
    }
}

//4. (optional) Implement Array reduce function. For simplicity, your implementation of reduce doesn"t need to replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.
console.log(reduce([1, 2, 3, 4], function (prev, curr, index, arr) {
    return prev + curr;
}, 0));

function reduce(arrayToReduce, f, acc) {
    if (f.index === undefined) {
        f.index = 0;
    } else {
        f.index++;
    }
    if (f.index === arrayToReduce.length) {
        return acc;
    }
    return reduce(arrayToReduce, f, f(acc, arrayToReduce[f.index], f.index, arrayToReduce));
}
