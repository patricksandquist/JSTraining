// Given an input string, reverse all the words.
var reverser = function (str) {
  var words = str.split(' ');
  var cleanWords = [];

  // If there are multiple spaces in a row, remove the extra empty words
  words.forEach(function (word) {
    if (word.length > 0) {
      cleanWords.push(word);
    }
  });

  return cleanWords.reverse().join(' ');
};

// Time complexity is O(n).

console.log(reverser("Hello world!") === "world! Hello");
console.log(reverser("Hello    world!") === "world! Hello");
console.log(reverser("My name is Patrick!") === "Patrick! is name My");
console.log(reverser("") === "");
