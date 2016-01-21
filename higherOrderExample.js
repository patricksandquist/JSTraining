// Here is an example of some higher-order functions.
// Taken from Effective Javascript, Item 19.

function compareNumbers(x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
}

// In this example, the function compareNumbers is given as an
// argument to the sort function. When sort is invoked on line
// 17, it will in turn invoke compareNumbers to sort the array.
[3, 1, 4, 1, 5, 9].sort(compareNumbers);
