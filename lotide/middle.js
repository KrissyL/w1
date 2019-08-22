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

/* find the middle element(s) of an array
if the array has only one or two elements, the middle returns blank
if the array has an odd number of elements, only one will print
if the array has an even number of elements, two will print
*/

const isEven = function(num) {
  return num % 2 === 0;
};
const middle = function(array) {
  let arrResult = [];
  const halfArray = array.length / 2;
  if (array.length > 2) {
    if (isEven(array.length)) {
      arrResult.push(array[halfArray - 1]);
      arrResult.push(array[halfArray]);
    } else {
      arrResult.push(array[Math.floor(halfArray)]);
    }
  }
  return arrResult;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]