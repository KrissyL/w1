const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(letterString) {
  let results = {};
  let letters = letterString.split(' ').join('').toLowerCase();
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const countedLetters = countLetters("Blaster StarfleEt chekov mccoy jabba");
assertEqual(countedLetters["b"], 3);
assertEqual(countedLetters["e"], 4);
assertEqual(countedLetters["l"], 2);