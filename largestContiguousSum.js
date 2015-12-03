// Given an array of integers (positive and negative) find the largest continuous sum.
function lcs(array) {
  var current_sum = 0, max = 0;
  if (array.length !== 0) {
    max = array[0];
  }

  for (var i = 0; i < array.length; i++) {
    current_sum += array[i];
    if (current_sum > max) {
      max = current_sum;
    }
    if (current_sum < 0) {
      current_sum = 0;
    }
  }

  return max;
}

console.log(lcs([5, 3, -7, 6]) === 8);
console.log(lcs([5, 3, -7, 6, 4]) === 11);
console.log(lcs([5]) === 5);
console.log(lcs([]) === 0);

// Time complexity is O(n) and space complexity is O(1)
