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

const flatten = function(array) {
  for (const [index, elem] of array.entries()) {
    if (Array.isArray(elem)) {
      array.splice(index, 1, ...elem);
    }
  }
  return array;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten(["krissy", ["Lewis","1s"], 26, ["years", "old"], ["in", 2019]]));