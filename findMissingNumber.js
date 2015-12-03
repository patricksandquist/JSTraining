// There is an array of non-negative integers.
// A second array is formed by shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

console.log(missing_number([4, 4, 2, 6, 0, 3], [6, 4, 2, 3, 4]) === 0);
console.log(missing_number([4, 4, 2, 6, 0, 3], [6, 4, 2, 3, 0]) === 4);
console.log(missing_number([4], []) === 4);