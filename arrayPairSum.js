// Given an integer array, output all pairs that sum up to a specific value k.
// Value pairs should be unique and take the form [min, max]

// O(n^2)
function pairSum (array, k) {
  var pairs = [];

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === k) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

// O(n * log(n))
function pairSum2 (array, k) {
  array = array.sort();
  var pairs = [];
  var i = 0;
  var j = array.length - 1;

  while (i < j) {
    var sum = array[i] + array[j];
    if (sum === k) {
      pairs.push([array[i], array[j]]);
      i++;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return pairs;
}

// O(n)
function pairSum3 (array, k) {
  var pairs = [];
  var seen = {};

  array.forEach(function (el, i, arr) {
    if (seen[k - el]) {
      pairs.push([el, k - el]);
    } else {
      seen[el] = true;
    }
  });

  return pairs;
}

console.log(pairSum([1,2,3,4,3,1,2], 4));
console.log(pairSum2([1,2,3,4,3,1,2], 4));
console.log(pairSum3([1,2,3,4,3,1,2], 4));
