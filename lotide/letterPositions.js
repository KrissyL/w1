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

const letterPositions = function(sentence) {
  let results = {};
  const letters = sentence.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};

console.log(letterPostions("hello"));
console.log(letterPositions("canada"));
