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
console.log([3, 1, 4, 1, 5, 9].sort(compareNumbers));

// This is the same as invoking the sort method with an anonymous function:
console.log([3, 1, 4, 1, 5, 9].sort(function (x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
}));

// Higher-order functions can save a lot of time by eliminating boilerplate
// code. Consider the following example where an array of names is made
// upperscript.
var names = ["Fred", "Wilma", "Pebbles"];
var upper = [];
for (var i = 0; i < names.length; i++) {
  upper[i] = names[i].toUpperCase();
}
console.log(upper);

// With Array#map, we can simply pass in a function to alter the array by.
// This returns a new array which we may then save as upper.
var names = ["Fred", "Wilma", "Pebbles"];
var upper = names.map(function (name) {
  return name.toUpperCase();
});
console.log(upper);
