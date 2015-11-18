// Given an integer array, output all pairs that sum up to a specific value k.

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
      pairs.push([i, j]);
      i++;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return pairs;
}
