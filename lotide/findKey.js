const findKey = function(obj, callback) {
  for (const objKey in obj) {
    if (callback(obj[objKey])) {
      return objKey;
    }
  }
};

module.exports = findKey;
