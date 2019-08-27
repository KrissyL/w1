const takeUntil = function(array, callback) {
  for (const [index, elem] of array.entries()) {
    if (callback(elem)) {
      return array.slice(0, index);
    }
  }
  return array;
};

module.exports = takeUntil;