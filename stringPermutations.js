// Generate all permutations of a given string.
var permutations = function (str) {
  if (str.length < 2) {
    return [str];
  }

  var letter = str[0];
  var lower_perms = permutations(str.slice(1));
  var output = [];

  lower_perms.forEach(function (perm) {
    for (var i = 0; i <= perm.length; i++) {
      output.push(perm.slice(0, i) + letter + perm.slice(i));
    }
  });

  return output;
};

// Time complexity is O(n!) which sounds bad but is actually optimal. This is
// just a computationally intensive problem!
