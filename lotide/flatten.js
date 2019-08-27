const flatten = function(array) {
  for (const [index, elem] of array.entries()) {
    if (Array.isArray(elem)) {
      array.splice(index, 1, ...elem);
    }
  }
  return array;
};

module.exports = flatten;