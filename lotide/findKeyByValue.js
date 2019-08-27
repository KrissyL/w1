const findKeyByValue = function(object, value) {
  for (const val in object) {
    if (object[val]) {
      if (object[val] === value) {
        return val;
      }
    }

  }
};

module.exports = findKeyByValue;