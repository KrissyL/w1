const assertArraysEqual = require('../index').assertArraysEqual;
const letterPositions = require('../index').letterPositions;

assertArraysEqual(letterPositions("hello").e, [1], true);
assertArraysEqual(letterPositions("canada").a, [1,3,5], true);