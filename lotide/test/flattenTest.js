const assertArraysEqual = require('../index').assertArraysEqual;
const flatten = require('../index').flatten;

  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  assertArraysEqual(flatten(["krissy", ["Lewis","1s"], 26, ["years", "old"]]), ["krissy", "Lewis", "1s", 26, "years", "old"]);