// We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of
// str1 and str2 if it can be formed by interleaving the characters of str1 and
// str2 in a way that maintains the left to right ordering of the characters from
// each string.

function isShuffled(str1, str2, str3) {
  if (str1.length + str2.length !== str3.length) {
    return false;
  }
  if (str1[0] !== str3[0] && str2[0] !== str3[0]) {
    return false;
  }
  if (str1.length === 0 || str2.length === 0) {
    if (str1 + str2 === str3) {
      return true;
    }
  }

  if (str1[0] === str3[0] && isShuffled(str1.slice(1), str2, str3.slice(1))) {
    return true;
  }
  if (str2[0] === str3[0] && isShuffled(str1, str2.slice(1), str3.slice(1))) {
    return true;
  }

  return false;
}

// Time complexity is O(n) where n is the length of str3.

console.log(isShuffled("abc", "def", "dabecf") === true);
console.log(isShuffled("abc", "def", "dbaecf") === false);
console.log(isShuffled("abc", "def", "dabecff") === false);
console.log(isShuffled("abc", "", "abc") === true);
console.log(isShuffled("", "", "") === true);
