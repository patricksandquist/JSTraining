// There is an array of non-negative integers.
// A second array is formed by shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

function missingNumber(arr1, arr2) {
  if (arr2.length === 0) {
    return arr1[0];
  }
  var sum1 = 0;
  var sum2 = 0;

  for (var i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    sum2 += arr2[j];
  }

  return sum1 - sum2;
}

console.log(missingNumber([4, 4, 2, 6, 0, 3], [6, 4, 2, 3, 4]) === 0);
console.log(missingNumber([4, 4, 2, 6, 0, 3], [6, 4, 2, 3, 0]) === 4);
console.log(missingNumber([4], []) === 4);
