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

module.exports = letterPositions;
