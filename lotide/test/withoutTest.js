const assertArraysEqual = require('../index').assertArraysEqual;
  
const without = require('../index').without;

assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without([1, 2, 3, 6, 2], [2]), [1,3,6]);
assertArraysEqual(without([7, "5", 9, "759", 5], ["5",9]), [7, '759', 5]);