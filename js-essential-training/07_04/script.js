/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const array = ['headphones', 'book', 'laptoop', 'ring', 'cup'];

console.log(array);
array.pop();
console.log(array);
let index = array.indexOf('book');
array.splice(index, 1);
console.log(array);
