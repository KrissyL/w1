const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔️ Assertion Passed: ${arr1} & ${arr2} are equal!`);
  } else {
    console.log(`❌ Assertion Failed: ${arr1} & ${arr2} are not equal!`);
  }
};

module.exports = assertArraysEqual;