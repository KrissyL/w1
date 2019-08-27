const eqArrays = require('../eqArrays');

const assertArraysEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✔️ Assertion Passed: ${arr1} & ${arr2} are equal!`);
    } else {
      console.log(`❌ Assertion Failed: ${arr1} & ${arr2} are not equal!`);
    }
  };
  
  assertArraysEqual([1, 2, 3], [1, 2, 3], true);
  assertArraysEqual([1, 2, 3], [3, 2, 1], false);
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false);