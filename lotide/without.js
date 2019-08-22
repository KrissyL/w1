const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️ Assertion Passed: ${arr1} & ${arr2} are equal!`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} & ${arr2} are not equal!`);
  }
};

const without = function(source, remItems) {
  for (const items of remItems) {
    for (const [index, rem] of source.entries()) {
      if (items === rem) {
        source.splice(index, 1);
      }
    }
  }
  return source;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3, 6, 2], [2])); // => [1,3,6]
console.log(without([7, "5", 9, "759", 5], ["5",9])); // => [7, "759", 5]
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);