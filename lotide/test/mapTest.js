const assertArraysEqual = require('../index').assertArraysEqual;
const map = require('../index').map;

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["kris", "bea", "ann", "lew"];
const words3 = ["Battle", "Ends", "And", "Down", "Goes", "Charles's","Father"];
  
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words2, word => word[0]), ['k', 'b', 'a', 'l']);
assertArraysEqual(map(words3, word => word[0]), ['B', 'E', 'A', 'D', 'G', 'C', 'F']);