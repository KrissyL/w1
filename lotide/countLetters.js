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

module.exports = countLetters;